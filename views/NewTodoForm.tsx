import * as elements from "typed-html";

export default () => (
  <form
    hx-swap="outerHTML"
    hx-target={`#todo-list`}
    hx-post="/new"
    class="flex gap-4"
  >
    <input name="content" placeholder="New todo" />
    <button type="submit">Submit</button>
  </form>
);
