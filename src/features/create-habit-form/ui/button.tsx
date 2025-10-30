import { Button } from '@headlessui/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { titles } from '../model/config';
import useCreateHabit from '../model/hook';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const CreateHabitButton: FC<Props> = ( { children, ...others } ) => {
  const { create } = useCreateHabit();

  const handleButtonClick = () => {
    const today = new Date( Date.now() );
    const days = [ String( today.getDay() ) ];
    const title = titles[ Math.floor( Math.random() * ( titles.length + 1 ) ) ];
    create( { data: { title, days } } );
  };

  return (
    <Button onClick={handleButtonClick} {...others}>{children}</Button>
  );
};

export default CreateHabitButton;