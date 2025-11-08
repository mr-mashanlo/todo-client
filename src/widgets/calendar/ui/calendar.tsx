import { type FC } from 'react';

import { useProgress } from '@/entities/progress';
import { useUpdateProgressTotal } from '@/features/update-progress';

import Chart from './chart';
import Skeleton from './skeleton';

const Calendar: FC = () => {
  const { data, isPending } = useProgress( { limit: '30' } );
  useUpdateProgressTotal();

  return isPending ? <Skeleton length={30} /> : <Chart progress={data?.data || []} length={30} />;
};

export default Calendar;