import { Button } from '@headlessui/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { useHabit } from '@/entities/habit';

import { titles } from '../model/config';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const CreateHabitButton: FC<Props> = ( { children, ...others } ) => {
  const { create } = useHabit();

  const handleButtonClick = () => {
    const days = [ String( new Date().getDay() ) ];
    const title = titles[ Math.floor( Math.random() * ( titles.length + 1 ) ) ];
    create( { data: { title, days } } );
  };

  return (
    <Button onClick={handleButtonClick} {...others}>{children}</Button>
  );
};

export default CreateHabitButton;