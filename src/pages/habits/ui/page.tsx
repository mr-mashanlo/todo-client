import { type FC } from 'react';

import { CreateHabitButton } from '@/features/create-habit-form';
import { NoteIcon } from '@/shared/icons';
import { Habits } from '@/widgets/habits';

export const HabitsPage: FC = () => {
  return (
    <div className="p-4 sm:p-15">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-bold text-2xl">Habits</h2>
        <CreateHabitButton className="cursor-pointer">
          <NoteIcon className="w-6 h-6" />
        </CreateHabitButton>
      </div>
      <Habits />
    </div>
  );
};

export default HabitsPage;