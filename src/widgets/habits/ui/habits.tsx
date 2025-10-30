import { type FC } from 'react';

import { useHabit } from '@/entities/habit';
import { DeleteHabitButton } from '@/features/delete-habit-button';
import { UpdateHabitForm } from '@/features/update-habit-form';
import { GarbageIcon } from '@/shared/icons';

const Habits: FC = () => {
  const { habits } = useHabit();

  return (
    <ul className="grid gap-2">
      {habits?.data.map( habit =>
        <li key={habit._id} className="group flex items-center gap-4">
          <DeleteHabitButton id={habit._id} className="cursor-pointer">
            <GarbageIcon className="w-6 h-6" />
          </DeleteHabitButton>
          <UpdateHabitForm habit={habit} />
        </li>
      )}
    </ul>
  );
};

export default Habits;