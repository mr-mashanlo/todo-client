import { type FC } from 'react';

import { Habits } from '@/widgets/habits';

export const HabitsPage: FC = () => {
  return (
    <div className="p-4 sm:p-15">
      <h2 className="mb-8 font-bold text-2xl">Habits</h2>
      <Habits />
    </div>
  );
};

export default HabitsPage;