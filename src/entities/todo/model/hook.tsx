import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { todoService } from '../api/api';

const useTodo = () => {

  const queryClient = useQueryClient();

  const { isPending, error, data: todos } = useQuery( {
    queryKey: [ 'todos' ],
    queryFn: () => todoService.fetch()
  } );

  const create = useMutation( {
    mutationFn: () => todoService.create(),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  const update = useMutation( {
    mutationFn: () => todoService.update(),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  const remove = useMutation( {
    mutationFn: () => todoService.remove(),
    onSuccess: () => { queryClient.invalidateQueries( { queryKey: [ 'todos' ] } ); }
  } );

  return { isPending, error, todos, create: create.mutate, update: update.mutate, remove: remove.mutate };
};

export default useTodo;