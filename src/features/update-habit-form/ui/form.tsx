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

  const updateHabit = debounce( ( e: FormEvent<HTMLFormElement> ) => handleFormSubmit( e ), 3000 );

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
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '1' )} onChange={handleCheckboxChange} value="1" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Mo</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '2' )} onChange={handleCheckboxChange} value="2" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Tu</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '3' )} onChange={handleCheckboxChange} value="3" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">We</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '4' )} onChange={handleCheckboxChange} value="4" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Th</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '5' )} onChange={handleCheckboxChange} value="5" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Fr</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '6' )} onChange={handleCheckboxChange} value="6" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Sa</Label>
          </Field>
          <Field>
            <Input type="checkbox" name={field.name} checked={field.state.value.includes( '0' )} onChange={handleCheckboxChange} value="0" className="peer sr-only" />
            <Label className="p-3 flex items-center justify-center cursor-pointer text-zinc-400 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">Su</Label>
          </Field>
        </Fieldset>
      }
      />
    </form>
  );
};

export default UpdateHabitForm;