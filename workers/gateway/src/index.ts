import { Hono } from 'hono'

type Bindings = {
  PRIVATE_SERVICE: Fetcher;
};

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/private/*', async (c) => {
  const res = await c.env.PRIVATE_SERVICE.fetch(c.req.raw)
  return res
})

export default app
