import { kyInstance } from '@/shared/libs';
import type { SearchParams } from '@/shared/types';

import type { Habit, HabitDTO, PaginatedHabit } from '../model/schema';

class HabitService {

  fetch = async ( params?: SearchParams ): Promise<PaginatedHabit> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `habit?${searchParams}` );
    return await response.json();
  };

  create = async ( data: HabitDTO ): Promise<Habit> => {
    const response = await kyInstance( 'habit', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  update = async ( id: string, data: HabitDTO ): Promise<Habit> => {
    const response = await kyInstance( `habit/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

  remove = async ( id: string ): Promise<{ ok: boolean }> => {
    const response = await kyInstance( `habit/${id}`, { method: 'delete' } );
    return await response.json();
  };

  today = async (): Promise<PaginatedHabit> => {
    const response = await kyInstance( 'habit/today' );
    return await response.json();
  };

}

export const habitService = new HabitService();