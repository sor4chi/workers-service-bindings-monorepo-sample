import { Hono } from "hono";

const app = new Hono().basePath("/private");

app.get("/", (c) => c.text("Hello Private Service!"));

export default app;
