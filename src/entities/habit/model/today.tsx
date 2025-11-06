import { useQuery } from '@tanstack/react-query';

import { habitService } from '../api/api';

const useTodayHabit = () => {

  const result = useQuery( {
    queryKey: [ 'today-habits' ],
    queryFn: async () => await habitService.today(),
    placeholderData: data => data
  } );

  return result;

};

export default useTodayHabit;