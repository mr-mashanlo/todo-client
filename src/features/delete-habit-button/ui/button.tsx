import { Button } from '@headlessui/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import useDeleteHabit from '../model/hook';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children: ReactNode
}

const DeleteHabitButton: FC<Props> = ( { id, children, ...others } ) => {
  const { remove } = useDeleteHabit();

  return (
    <Button onClick={() => remove( { id } )} {...others}>{children}</Button>
  );
};

export default DeleteHabitButton;