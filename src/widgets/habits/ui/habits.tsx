import { type FC } from 'react';

import { useHabit } from '@/entities/habit';
import { UpdateHabitForm } from '@/features/update-habit-form';

const Habits: FC = () => {
  const { habits } = useHabit();

  return (
    <ul className="grid gap-2">
      {habits?.data.map( habit =>
        <li key={habit._id}>
          <UpdateHabitForm habit={habit} />
        </li>
      )}
    </ul>
  );
};

export default Habits;