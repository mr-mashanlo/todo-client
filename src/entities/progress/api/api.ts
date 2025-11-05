import { kyInstance } from '@/shared/libs';
import type { SearchParams } from '@/shared/types';

import type { PaginatedProgress, Progress, ProgressDTO } from '../model/schema';

class ProgressService {

  fetch = async ( params?: SearchParams ): Promise<PaginatedProgress> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `progress?${searchParams}` );
    return await response.json();
  };

  create = async ( data: ProgressDTO ): Promise<Progress> => {
    const response = await kyInstance( 'progress', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  update = async ( id: string, data: ProgressDTO ): Promise<Progress> => {
    const response = await kyInstance( `progress/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

  remove = async ( id: string ): Promise<{ ok: boolean }> => {
    const response = await kyInstance( `progress/${id}`, { method: 'delete' } );
    return await response.json();
  };

  today = async (): Promise<Progress> => {
    const response = await kyInstance( 'progress/today' );
    return await response.json();
  };

}

export const progressService = new ProgressService();