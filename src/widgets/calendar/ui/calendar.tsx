import { type FC } from 'react';

import { useProgress } from '@/entities/progress';
import { useUpdateProgressTotal } from '@/features/update-progress';

const Calendar: FC = () => {
  const { data } = useProgress( { limit: '31' } );
  useUpdateProgressTotal();

  return (
    <ul className="flex gap-2">
      {Array.from( { length: 31 - ( data?.total || 0 ) } ).map( ( _, index ) =>
        <li key={index} className="h-40 grow bg-zinc-200/50"></li>
      )}
      {data?.data.map( progress =>
        <li key={progress._id} className="h-40 grow bg-zinc-200/50 overflow-hidden relative">
          <span className="w-full bg-black absolute bottom-0 transition-all" style={{ height: progress.habits.length === 0 ? 0 : Math.ceil( progress.habits.length * 100 / progress.total ) + '%' }}></span>
        </li>
      )}
    </ul>
  );
};

export default Calendar;