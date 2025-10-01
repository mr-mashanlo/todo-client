import { kyInstance } from '@/shared/libs';

class TodoService {

  fetch = async () => {
    return await kyInstance( 'todo', { method: 'get' } );
  };

  create = async () => {
    return await kyInstance( 'todo', { method: 'post' } );
  };

  update = async () => {
    return await kyInstance( 'todo', { method: 'put' } );
  };

  remove = async () => {
    return await kyInstance( 'todo', { method: 'delete' } );
  };

}

export const todoService = new TodoService();