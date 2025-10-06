import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { todoService } from '../api/api';
import type { TodoDTOType } from './schema';

const useTodo = () => {

  const queryClient = useQueryClient();

  const { isPending, error, data: todos } = useQuery( {
    queryKey: [ 'todos' ],
    queryFn: () => todoService.fetch()
  } );

  const create = useMutation( {
    mutationFn: ( data: TodoDTOType ) => todoService.create( data ),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  const update = useMutation( {
    mutationFn: ( data: TodoDTOType ) => todoService.update( data ),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  const remove = useMutation( {
    mutationFn: ( id: string ) => todoService.remove( id ),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  return { isPending, error, todos, create: create.mutate, update: update.mutate, remove: remove.mutate };

};

export default useTodo;