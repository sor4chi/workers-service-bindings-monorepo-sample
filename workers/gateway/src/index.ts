import { Hono } from 'hono'

type Bindings = {
  PRIVATE_SERVICE: Fetcher;
};

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.text('Hello Hono!'))

export default app
