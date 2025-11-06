import { type FC } from 'react';

import { useTodayHabit } from '@/entities/habit';
import { CreateProgressForm } from '@/features/create-progress-form';

const Progress: FC = () => {
  const { data } = useTodayHabit();

  return (
    <div>
      <CreateProgressForm habits={data?.data || []} />
    </div>
  );
};

export default Progress;