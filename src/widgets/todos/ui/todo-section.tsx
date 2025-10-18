import { type FC } from 'react';

import { useTodo } from '@/entities/todo';
import { mapTodoByMonth } from '@/shared/mappers';

import TodoArticle from './todo-article';

const TodoSection: FC = () => {
  const { todos } = useTodo();

  return (
    <section className="grid gap-12">
      {mapTodoByMonth( todos?.data || [] ).map( ( { month, todos }, index ) => <TodoArticle month={month} todos={todos} key={index} /> )}
    </section>
  );
};

export default TodoSection;