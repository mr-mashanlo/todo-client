import { type FC } from 'react';

import { type Todo } from '@/entities/todo';

interface Props {
  month: string,
  todos: Array<Todo>
}

const TodoArticle: FC<Props> = ( { month, todos } ) => {
  return (
    <article>
      <h2 className="mb-6 font-black text-2xl">{month}</h2>
      <ul className="grid gap-4">
        {todos.map( todo => (
          <li key={todo._id} className="flex gap-3 sm:gap-4">
            <form>
              <label>
                <input type="checkbox" name="complete" className="peer sr-only" />
                <span className="w-4 h-4 mt-1 block rounded-full cursor-pointer bg-zinc-200 peer-checked:bg-black"></span>
              </label>
            </form>
            <h3>{todo.title}</h3>
          </li>
        ) )}
      </ul>
    </article>
  );
};

export default TodoArticle;