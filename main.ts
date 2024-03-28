import { Hono } from 'https://deno.land/x/hono@v4.1.5/mod.ts'
import { cors } from 'https://deno.land/x/hono@v4.1.5/middleware.ts'
import 'https://deno.land/x/dotenv@v3.2.2/load.ts'

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  return c.json({ message: 'Hello world!' })
})

Deno.serve({ port: Number(Deno.env.get('PORT') || 8000) }, app.fetch)
