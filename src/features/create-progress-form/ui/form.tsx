import { Field, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type FC, type FormEvent } from 'react';

import type { Habit } from '@/entities/habit';
import { CheckedIcon } from '@/shared/icons';
import { debounce } from '@/shared/utils';

import useCreateProgress from '../model/hook';

interface Props {
  habits: Array<Habit>
}

const CreateProgressForm: FC<Props> = ( { habits } ) => {
  const form = useCreateProgress();

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const updateHabit = debounce( ( e: FormEvent<HTMLFormElement> ) => handleFormSubmit( e ), 3000 );

  const handleFormChange = ( e: FormEvent<HTMLFormElement> ) => { updateHabit( e ); };

  const handleCheckboxChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const { checked, value } = e.target;
    const habits = form.getFieldValue( 'habits' );
    form.setFieldValue( 'habits', checked ? [ ...habits, { habit: value, completed: checked } ] : habits.filter( habit => habit.habit !== value ) );
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="grid gap-2">
      <form.Field name="habits" children={field =>
        habits.map( habit =>
          <Field key={habit._id} className="group flex items-center">
            <Label className="flex items-center gap-4 cursor-pointer">
              <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.some( b => b.habit === habit._id )} value={habit._id} className="peer sr-only" />
              <CheckedIcon className="w-7 h-7 flex items-center justify-center bg-zinc-200/50 fill-zinc-300 rounded-full peer-checked:bg-blue-400/10 peer-checked:fill-blue-400"/>
              <span className="py-3">{habit.title}</span>
            </Label>
          </Field>
        )
      }
      />
    </form>
  );
};

export default CreateProgressForm;