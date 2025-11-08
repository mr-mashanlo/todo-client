import { type FC } from 'react';

const Skeleton: FC = () => {
  return (
    <ul className="grid gap-2 animate-pulse">
      <li className="py-2.5 flex items-center gap-4">
        <span className="block w-7 h-7 rounded-full bg-zinc-200/50"></span>
        <span className="block w-60 h-3 rounded-lg bg-zinc-200/50"></span>
      </li>
      <li className="py-2.5 flex items-center gap-4">
        <span className="block w-7 h-7 rounded-full bg-zinc-200/50"></span>
        <span className="block w-70 h-3 rounded-lg bg-zinc-200/50"></span>
      </li>
      <li className="py-2.5 flex items-center gap-4">
        <span className="block w-7 h-7 rounded-full bg-zinc-200/50"></span>
        <span className="block w-50 h-3 rounded-lg bg-zinc-200/50"></span>
      </li>
      <li className="py-2.5 flex items-center gap-4">
        <span className="block w-7 h-7 rounded-full bg-zinc-200/50"></span>
        <span className="block w-80 h-3 rounded-lg bg-zinc-200/50"></span>
      </li>
    </ul>
  );
};

export default Skeleton;