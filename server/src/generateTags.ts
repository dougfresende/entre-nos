import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import QRCode from 'qrcode'
import { pool } from './db.js'

const baseUrl = (process.env.PUBLIC_BASE_URL ?? '').replace(/\/$/, '')
const outputDir = path.resolve(process.env.TAG_OUTPUT_DIR ?? 'data/tag-kit')
if (!baseUrl.startsWith('https://')) throw new Error('PUBLIC_BASE_URL must be an HTTPS URL before printing tags.')
await mkdir(outputDir, { recursive: true })

const { rows } = await pool.query<{ token: string; label: string }>('select token, label from event_tags where active = true order by label')
const csv = ['label,token,url']
for (const tag of rows) {
  const url = `${baseUrl}/t/${tag.token}`
  const filename = `${tag.token}.svg`
  await QRCode.toFile(path.join(outputDir, filename), url, { type: 'svg', margin: 4, errorCorrectionLevel: 'M', color: { dark: '#000000', light: '#FFFFFF' } })
  csv.push([tag.label, tag.token, url].map((value) => `"${value.replaceAll('"', '""')}"`).join(','))
}
await writeFile(path.join(outputDir, 'manifest.csv'), `${csv.join('\n')}\n`, 'utf8')
await pool.end()
console.log(`Generated ${rows.length} QR codes in ${outputDir}`)
