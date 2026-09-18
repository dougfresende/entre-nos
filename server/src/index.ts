import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import { z } from 'zod'
import { pool } from './db.js'

const app = express()
const port = Number(process.env.PORT ?? 3001)
app.use(cors({ origin: process.env.WEB_ORIGIN?.split(',') ?? true }))
app.use(express.json({ limit: '64kb' }))

const tokenSchema = z.string().min(8).max(100).regex(/^[a-zA-Z0-9_-]+$/)
const sessionSchema = z.object({ name: z.string().trim().min(1, 'Informe seu nome').max(80), consent: z.literal(true) })
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
app.use((_request, response) => response.status(404).json({ error: 'Rota não encontrada.' }))
app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
  if (error instanceof z.ZodError) return response.status(400).json({ error: 'Dados inválidos.', details: error.issues })
  console.error(error)
  return response.status(500).json({ error: 'Não foi possível concluir a solicitação.' })
})
app.listen(port, () => console.log(`Entre Nós API listening on ${port}`))
