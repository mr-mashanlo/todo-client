import moment from 'moment';

import type { Todo } from '@/entities/todo';

export const mapTodoByMonth = ( todos: Array<Todo> ) => {
  const objectOfTodos = todos.reduce( ( acc: Record<string, Array<Todo>>, todo: Todo ) => {
    const key = moment( todo.created ).format( 'MMMM YYYY' );
    acc[`${key}`] = [ todo, ...acc[`${key}`] || [] ];
    return acc;
  }, {} );

  return Object.entries( objectOfTodos ).map( ( [ month, todos ] ) => ( { month, todos } ) );
};