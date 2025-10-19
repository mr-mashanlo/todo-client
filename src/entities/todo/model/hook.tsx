import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SearchParams } from '@/shared/types';

import { todoService } from '../api/api';
import type { TodoDTO } from './schema';

const useTodo = ( params?: SearchParams ) => {

  const queryClient = useQueryClient();

  const { isPending, error, data: todos } = useQuery( {
    queryKey: [ 'todos', params ],
    queryFn: async () => await todoService.fetch( params ),
    placeholderData: data => data
  } );

  const create = useMutation( {
    mutationFn: async ( { data }: { data: TodoDTO } ) => await todoService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: TodoDTO } ) => await todoService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await todoService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'todos' ] } )
  } );

  return { isPending, error, todos, create: create.mutate, update: update.mutate, remove: remove.mutate };

};

export default useTodo;