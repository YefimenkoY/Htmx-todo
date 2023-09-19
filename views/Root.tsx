import * as elements from "typed-html";
import NewTodoForm from "./NewTodoForm";
import { todos } from "../app";
import { TodoList } from "./TodoList";

const Html = ({ children }: elements.Children) => `<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Hello World</title>
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    </head>
${children}
</html>`;

export const Root = () => (
  <Html>
    <body>
      <NewTodoForm />
      <TodoList todos={todos} />
    </body>
  </Html>
);
