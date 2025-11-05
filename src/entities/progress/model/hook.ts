import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SearchParams } from '@/shared/types';

import { progressService } from '../api/api';
import type { ProgressDTO } from './schema';

const useProgress = ( params?: SearchParams ) => {

  const queryClient = useQueryClient();

  const { isPending, error, data: progress } = useQuery( {
    queryKey: [ 'progress', params ],
    queryFn: async () => await progressService.fetch( params ),
    placeholderData: data => data
  } );

  const create = useMutation( {
    mutationFn: async ( { data }: { data: ProgressDTO } ) => await progressService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: ProgressDTO } ) => await progressService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await progressService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  const { data: today } = useQuery( {
    queryKey: [ 'today-progress' ],
    queryFn: async () => await progressService.today(),
    placeholderData: data => data
  } );

  return {
    isPending,
    error,
    progress,
    today,
    create: create.mutate,
    update: update.mutate,
    remove: remove.mutate
  };

};

export default useProgress;