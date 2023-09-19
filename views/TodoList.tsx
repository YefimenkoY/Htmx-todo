import * as elements from "typed-html";

import { Props as Todo, TodoItem } from "./TodoItem";

export const TodoList = ({ todos }: { todos: Todo[] }) => (
  <ul id="todo-list" class="flex-col gap-2 flex p-0">
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
);
