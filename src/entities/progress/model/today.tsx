import { useQuery } from '@tanstack/react-query';

import { progressService } from '../api/api';

const useTodayProgress = () => {

  const result = useQuery( {
    queryKey: [ 'today-progress' ],
    queryFn: async () => await progressService.today(),
    placeholderData: data => data
  } );

  return result;

};

export default useTodayProgress;