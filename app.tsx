import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { TodoList } from "./views/TodoList";
import { Root } from "./views/Root";

export const app = new Elysia();

app.use(html());

export let todos = [
  { id: 1, text: "test", completed: false },
  { id: 2, text: "test2", completed: false },
];

app.get("/", () => <Root />);

app.post(
  "/toggle:id",
  ({ params }) => {
    for (const todo of todos) {
      if (todo.id === parseInt(params.id)) {
        todo.completed = !todo.completed;
      }
    }

    return <TodoList todos={todos} />;
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  }
);

app.post(
  "/new",
  ({ body }) => {
    todos.push({
      id: todos.length + 1,
      text: body.content,
      completed: false,
    });

    return <TodoList todos={todos} />;
  },
  {
    body: t.Object({
      content: t.String(),
    }),
  }
);

app.delete(
  "/delete:id",
  ({ params: { id } }) => {
    todos = todos.filter((todo) => todo.id !== parseInt(id));

    return <TodoList todos={todos} />;
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  }
);
