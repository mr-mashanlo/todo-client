import { type FC } from 'react';
import { Link } from 'react-router';

import { Progress } from '@/widgets/progress';

export const HomePage: FC = () => {
  return (
    <div className="p-4 sm:p-15">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-bold text-2xl">Today</h2>
        <span className="font-bold text-2xl text-zinc-200">/</span>
        <Link to="/habits" className="font-bold text-2xl text-zinc-200 hover:underline hover:text-black">go to habits</Link>
      </div>
      <Progress />
    </div>
  );
};

export default HomePage;