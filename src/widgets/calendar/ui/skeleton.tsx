import { type FC } from 'react';

interface Props {
  length: number
}

const Skeleton: FC<Props> = ( { length } ) => {
  return (
    <ul className="flex gap-2 animate-pulse">
      {Array.from( { length } ).map( ( _, index ) =>
        <li key={index} className="h-40 grow bg-zinc-200/50 rounded-2xl"></li>
      )}
    </ul>
  );
};

export default Skeleton;