import { type FC } from 'react';
import { Link } from 'react-router';

import { CreateHabitButton } from '@/features/create-habit-form';
import { AddIcon } from '@/shared/icons';
import { Habits } from '@/widgets/habits';

export const HabitsPage: FC = () => {
  return (
    <>
      <title>Habits - All your habits</title>
      <meta name="description" content="View, add, edit, and delete your personal habits in one place." />
      <meta property="og:title" content="Habits - All your habits" />
      <meta property="og:description" content="View, add, edit, and delete your personal habits in one place." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <div className="p-4 sm:p-15">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-bold text-2xl">Habits</h2>
          <CreateHabitButton className="w-7 h-7 flex items-center justify-center bg-zinc-200/50 fill-zinc-300 rounded-full cursor-pointer hover:bg-blue-400/10 hover:fill-blue-400">
            <AddIcon className="w-7 h-7" />
          </CreateHabitButton>
          <span className="font-bold text-2xl text-zinc-200">/</span>
          <Link to="/" className="font-bold text-2xl text-zinc-200 hover:underline hover:text-black">go to home</Link>
        </div>
        <Habits />
      </div>
    </>
  );
};

export default HabitsPage;