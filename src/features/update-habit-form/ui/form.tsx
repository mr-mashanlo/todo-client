import { Description, Field, Fieldset, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type FC, type FormEvent } from 'react';
import z from 'zod';

import type { Habit } from '@/entities/habit';
import { debounce } from '@/shared/utils/debounce';

import useUpdateHabit from '../model/hook';

interface Props {
  habit: Habit
}

const UpdateHabitForm: FC<Props> = ( { habit } ) => {
  const form = useUpdateHabit( habit );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const updateHabit = debounce( ( e: FormEvent<HTMLFormElement> ) => handleFormSubmit( e ), 1000 );

  const handleFormChange = ( e: FormEvent<HTMLFormElement> ) => { updateHabit( e ); };

  const handleCheckboxChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const { checked, value } = e.target;
    const days = form.getFieldValue( 'days' );
    form.setFieldValue( 'days', checked ? [ ...days, value ] : days.filter( day => day !== value ) );
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="w-full grid grid-cols-5 gap-2 items-center">
      <form.Field name="title" validators={{ onChange: z.string().min( 3, 'Must be at least 3 characters long' ) }} children={field =>
        <Field className="col-span-3 line-clamp-1 relative">
          <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} className="w-full outline-none" />
          {!field.state.meta.isValid && <Description className="text-rose-500 absolute top-0 right-0">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
        </Field>}
      />
      <form.Field name="days" children={field =>
        <Fieldset className="grid grid-cols-7 col-span-2">
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '1' )} value="1" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Mo</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '2' )} value="2" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Tu</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '3' )} value="3" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">We</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '4' )} value="4" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Th</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '5' )} value="5" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Fr</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '6' )} value="6" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Sa</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} onChange={handleCheckboxChange} checked={field.state.value.includes( '0' )} value="0" className="peer sr-only" />
            <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Su</Label>
          </Field>
        </Fieldset>
      }
      />
    </form>
  );
};

export default UpdateHabitForm;