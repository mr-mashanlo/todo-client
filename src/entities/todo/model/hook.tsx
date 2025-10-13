import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { todoService } from '../api/api';
import type { TodoDTOType } from './schema';

const useTodo = () => {

  const queryClient = useQueryClient();

  const { isPending, error, data: todos } = useQuery( {
    queryKey: [ 'todos' ],
    queryFn: async () => await todoService.fetch()
  } );

  const create = useMutation( {
    mutationFn: async ( { data }: { data: TodoDTOType } ) => await todoService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: TodoDTOType } ) => await todoService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await todoService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  return { isPending, error, todos, create: create.mutate, update: update.mutate, remove: remove.mutate };

};

export default useTodo;