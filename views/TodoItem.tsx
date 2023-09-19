import * as elements from "typed-html";
import cx from "classnames";

export type Props = {
  id: number;
  completed: boolean;
  text: string;
};

export const TodoItem = ({ todo }: { todo: Props }) => (
  <li
    hx-post={`/toggle${todo.id}`}
    hx-swap="outerHTML"
    hx-target={`#todo-list`}
    class={cx(
      "position-relative cursor-pointer border-dashed border-black border-2 p-3 rd bg-coolgray-300 list-none",
      {
        "bg-red": todo.completed,
      }
    )}
  >
    <button
      class="p-1 position-absolute top-0 right-0 z-1 border-dashed border-black border-1 cursor-pointer"
      hx-swap="outerHTML"
      onclick="event.stopPropagation()"
      hx-target={`#todo-list`}
      hx-delete={`/delete${todo.id}`}
    >
      x
    </button>
    <input type="checkbox" checked={todo.completed} />
    <span class="font-sans font-600">{todo.text}</span>
  </li>
);
