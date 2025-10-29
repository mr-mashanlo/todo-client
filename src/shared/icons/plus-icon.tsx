import type { FC, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>

const PlusIcon: FC<Props> = ( { ...others } ) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...others}>
      <path d="M12,22c5.5137,0,10-4.4858,10-10S17.5137,2,12,2S2,6.4858,2,12S6.4863,22,12,22z M12,4c4.4111,0,8,3.5889,8,8 s-3.5889,8-8,8s-8-3.5889-8-8S7.5889,4,12,4z"/>
      <path d="M9,13h2v2c0,0.5522,0.4473,1,1,1s1-0.4478,1-1v-2h2c0.5527,0,1-0.4478,1-1s-0.4473-1-1-1h-2V9c0-0.5522-0.4473-1-1-1 s-1,0.4478-1,1v2H9c-0.5527,0-1,0.4478-1,1S8.4473,13,9,13z"/>
    </svg>
  );
};

export default PlusIcon;