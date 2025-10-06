import { kyInstance } from '@/shared/libs';

import type { TodoDTOType } from '../model/schema';

class TodoService {

  fetch = async () => {
    return await kyInstance( 'todo', { method: 'get' } );
  };

  create = async ( data: TodoDTOType ) => {
    return await kyInstance( 'todo', { method: 'post', body: JSON.stringify( data ) } );
  };

  update = async ( data: TodoDTOType ) => {
    return await kyInstance( 'todo', { method: 'put', body: JSON.stringify( data ) } );
  };

  remove = async ( id: string ) => {
    return await kyInstance( `todo/${id}`, { method: 'delete' } );
  };

}

export const todoService = new TodoService();