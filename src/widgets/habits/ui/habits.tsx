import { type FC } from 'react';

import { useHabit } from '@/entities/habit';

import Skeleton from './skeleton';
import Table from './table';

const Habits: FC = () => {
  const { data, isPending } = useHabit();

  return isPending ? <Skeleton /> : <Table habits={data?.data || []} />;
};

export default Habits;