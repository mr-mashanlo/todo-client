import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SearchParams } from '@/shared/types';

import { habitService } from '../api/api';
import type { HabitDTO } from './schema';

const useHabit = ( params?: SearchParams ) => {

  const queryClient = useQueryClient();

  const { isPending, error, data: habits } = useQuery( {
    queryKey: [ 'habits', params ],
    queryFn: async () => await habitService.fetch( params ),
    placeholderData: data => data
  } );

  const create = useMutation( {
    mutationFn: async ( { data }: { data: HabitDTO } ) => await habitService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: HabitDTO } ) => await habitService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await habitService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  return { isPending, error, habits, create: create.mutate, update: update.mutate, remove: remove.mutate };

};

export default useHabit;