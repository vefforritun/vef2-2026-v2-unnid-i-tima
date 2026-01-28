import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { TodoPage } from "./components/TodoPage.js";
import type { Todo } from "./types.js";
import { createTodo, listTodos } from "./lib/db.js";

// búum til og exportum Hono app
export const app = new Hono();

// sendir út allt sem er í static möppunni
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  const todos = await listTodos()

  if (!todos) {
    console.error('villa við að sækja todos', todos)
    return c.text('villa!')
  }

  return c.html(<TodoPage todos={todos} />);
});

app.post('/add', async (c) => {
  const body = await c.req.parseBody();
  console.log(body)

  const title = body.title
  // hér þarf að eiga sér stað validation!

  // createTodo(title);

  return c.text('post móttekið!')
});
