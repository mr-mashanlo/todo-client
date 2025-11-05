import { type FC } from 'react';

import { useHabit } from '@/entities/habit';
import { CreateProgressForm } from '@/features/create-progress-form';

const Progress: FC = () => {
  const { today } = useHabit();

  return (
    <div>
      <CreateProgressForm habits={today?.data || []} />
    </div>
  );
};

export default Progress;