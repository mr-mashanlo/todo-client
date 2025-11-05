import { type FC } from 'react';

import { useHabit } from '@/entities/habit';
import { DeleteHabitButton } from '@/features/delete-habit-button';
import { UpdateHabitForm } from '@/features/update-habit-form';
import { CancelIcon } from '@/shared/icons';

const Habits: FC = () => {
  const { habits } = useHabit();

  return (
    <ul className="grid gap-2">
      {habits?.data.map( habit =>
        <li key={habit._id} className="group flex items-center gap-4">
          <DeleteHabitButton id={habit._id} className="w-7 h-7 flex items-center justify-center bg-zinc-200/50 fill-zinc-300 rounded-full cursor-pointer hover:bg-red-400/10 hover:fill-red-400">
            <CancelIcon className="w-7 h-7" />
          </DeleteHabitButton>
          <UpdateHabitForm habit={habit} />
        </li>
      )}
    </ul>
  );
};

export default Habits;