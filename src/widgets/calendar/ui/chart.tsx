import { type FC } from 'react';

import { type Progress } from '@/entities/progress';

import useChart from '../model/hook';

interface Props {
  progress: Array<Progress>,
  length: number
}

const Chart: FC<Props> = ( { progress, length } ) => {
  const { charts } = useChart( progress, length );

  const calculateHeight = ( length: number, total: number ) => {
    if ( length === 0 || total === 0 ) return 0;
    return Math.ceil( length * 100 / total );
  };

  return (
    <ul className="flex gap-2">
      {charts.map( progress =>
        <li key={progress.date} className="h-40 grow bg-zinc-200/50 rounded-2xl overflow-hidden relative">
          {progress.habits ? <span className="w-full bg-black absolute bottom-0 transition-all" style={{ height: calculateHeight( progress.habits.length, progress.total || 0 ) + '%' }}></span> : null }
        </li>
      )}
    </ul>
  );
};

export default Chart;