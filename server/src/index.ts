import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import multer from 'multer'
import { z } from 'zod'
import { pool } from './db.js'

const app = express()
const port = Number(process.env.PORT ?? 3001)
const uploadDir = process.env.UPLOAD_DIR ?? path.resolve('data/uploads')
await mkdir(uploadDir, { recursive: true })
const upload = multer({
  storage: multer.diskStorage({ destination: uploadDir, filename: (_request, file, callback) => callback(null, `${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`) }),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => callback(null, file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')),
})
app.use(cors({ origin: process.env.WEB_ORIGIN?.split(',') ?? true }))
app.use(express.json({ limit: '64kb' }))

const tokenSchema = z.string().min(8).max(100).regex(/^[a-zA-Z0-9_-]+$/)
const sessionSchema = z.object({ name: z.string().trim().min(1, 'Informe seu nome').max(80), consent: z.literal(true) })
const sessionIdSchema = z.string().uuid()
const noteSchema = z.object({ body: z.string().trim().min(1).max(500) })
type TagRow = { token: string; label: string; event_title: string; couple_names: string }

async function findTag(token: string): Promise<TagRow | undefined> {
  const result = await pool.query<TagRow>(`select tags.token, tags.label, events.title as event_title, events.couple_names from event_tags tags join events on events.id = tags.event_id where tags.token = $1 and tags.active = true and events.active = true`, [token])
  return result.rows[0]
}

app.get('/health', async (_request, response) => { await pool.query('select 1'); response.json({ status: 'ok' }) })
app.get('/api/v1/tags/:token', async (request, response) => {
  const token = tokenSchema.parse(request.params.token)
  const tag = await findTag(token)
  if (!tag) return response.status(404).json({ error: 'Etiqueta não encontrada ou desativada.' })
  return response.json({ tag: { label: tag.label }, event: { title: tag.event_title, coupleNames: tag.couple_names } })
})
app.post('/api/v1/tags/:token/sessions', async (request, response) => {
  const token = tokenSchema.parse(request.params.token)
  const data = sessionSchema.parse(request.body)
  const tag = await findTag(token)
  if (!tag) return response.status(404).json({ error: 'Etiqueta não encontrada ou desativada.' })
  const result = await pool.query<{ id: string }>(`insert into guest_sessions (event_id, tag_id, display_name) select events.id, tags.id, $2 from event_tags tags join events on events.id = tags.event_id where tags.token = $1 and tags.active = true and events.active = true returning id`, [token, data.name])
  return response.status(201).json({ session: { id: result.rows[0]?.id, displayName: data.name } })
})
app.post('/api/v1/sessions/:sessionId/media', upload.single('file'), async (request, response) => {
  const sessionId = sessionIdSchema.parse(request.params.sessionId)
  if (!request.file) return response.status(400).json({ error: 'Envie uma foto ou vídeo.' })
  const session = await pool.query<{ event_id: string }>('select event_id from guest_sessions where id = $1', [sessionId])
  if (!session.rows[0]) return response.status(404).json({ error: 'Sessão não encontrada.' })
  const file = request.file
  const result = await pool.query<{ id: string; state: string }>('insert into media (event_id, session_id, original_name, storage_key, mime_type, byte_size) values ($1, $2, $3, $4, $5, $6) returning id, state', [session.rows[0].event_id, sessionId, file.originalname.slice(0, 240), file.filename, file.mimetype, file.size])
  return response.status(201).json({ media: { id: result.rows[0]?.id, state: result.rows[0]?.state } })
})
app.post('/api/v1/sessions/:sessionId/notes', async (request, response) => {
  const sessionId = sessionIdSchema.parse(request.params.sessionId)
  const data = noteSchema.parse(request.body)
  const result = await pool.query<{ id: string; state: string }>('insert into notes (event_id, session_id, body) select event_id, id, $2 from guest_sessions where id = $1 returning id, state', [sessionId, data.body])
  if (!result.rows[0]) return response.status(404).json({ error: 'Sessão não encontrada.' })
  return response.status(201).json({ note: { id: result.rows[0].id, state: result.rows[0].state } })
})
app.get('/api/v1/sessions/:sessionId/missions', async (request, response) => {
  const sessionId = sessionIdSchema.parse(request.params.sessionId)
  const result = await pool.query<{ id: string; title: string; description: string; submission_state: string | null }>(`select missions.id, missions.title, missions.description, mission_submissions.state as submission_state from missions join guest_sessions on guest_sessions.event_id = missions.event_id left join mission_submissions on mission_submissions.mission_id = missions.id and mission_submissions.session_id = guest_sessions.id where guest_sessions.id = $1 and missions.active = true order by missions.created_at`, [sessionId])
  return response.json({ missions: result.rows })
})
app.post('/api/v1/sessions/:sessionId/missions/:missionId', async (request, response) => {
  const sessionId = sessionIdSchema.parse(request.params.sessionId)
  const missionId = sessionIdSchema.parse(request.params.missionId)
  const result = await pool.query<{ id: string; state: string }>(`insert into mission_submissions (mission_id, session_id) select missions.id, sessions.id from missions join guest_sessions sessions on sessions.event_id = missions.event_id where missions.id = $1 and sessions.id = $2 and missions.active = true on conflict (mission_id, session_id) do nothing returning id, state`, [missionId, sessionId])
  if (!result.rows[0]) return response.status(409).json({ error: 'Essa missão já foi enviada ou não está disponível.' })
  return response.status(201).json({ submission: result.rows[0] })
})
app.use((_request, response) => response.status(404).json({ error: 'Rota não encontrada.' }))
app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
  if (error instanceof z.ZodError) return response.status(400).json({ error: 'Dados inválidos.', details: error.issues })
  if (error instanceof multer.MulterError) return response.status(error.code === 'LIMIT_FILE_SIZE' ? 413 : 400).json({ error: 'Arquivo não aceito.', code: error.code })
  console.error(error)
  return response.status(500).json({ error: 'Não foi possível concluir a solicitação.' })
})
app.listen(port, () => console.log(`Entre Nós API listening on ${port}`))
