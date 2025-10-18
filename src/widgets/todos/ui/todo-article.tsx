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
          <li key={todo._id}>
            <h3>{todo.title}</h3>
          </li>
        ) )}
      </ul>
    </article>
  );
};

export default TodoArticle;