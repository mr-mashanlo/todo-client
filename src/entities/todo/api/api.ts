import { kyInstance } from '@/shared/libs';

import type { PaginatedTodo, Todo, TodoDTO } from '../model/schema';

class TodoService {

  fetch = async (): Promise<PaginatedTodo> => {
    const response = await kyInstance( 'todo' );
    return await response.json();
  };

  create = async ( data: TodoDTO ): Promise<Todo> => {
    const response = await kyInstance( 'todo', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  update = async ( id: string, data: TodoDTO ): Promise<Todo> => {
    const response = await kyInstance( `todo/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

  remove = async ( id: string ): Promise<{ ok: boolean }> => {
    const response = await kyInstance( `todo/${id}`, { method: 'delete' } );
    return await response.json();
  };

}

export const todoService = new TodoService();