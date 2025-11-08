import { type FC } from 'react';

import { useTodayHabit } from '@/entities/habit';
import { CreateProgressForm } from '@/features/create-progress-form';

import Skeleton from './skeleton';

const Progress: FC = () => {
  const { data, isPending } = useTodayHabit();

  return isPending ? <Skeleton /> : <CreateProgressForm habits={data?.data || []} />;
};

export default Progress;