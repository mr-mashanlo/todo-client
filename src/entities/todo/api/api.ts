import { kyInstance } from '@/shared/libs';
import type { SearchParams } from '@/shared/types';

import type { PaginatedTodo, Todo, TodoDTO } from '../model/schema';

class TodoService {

  fetch = async ( params?: SearchParams ): Promise<PaginatedTodo> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `todo?${searchParams}` );
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