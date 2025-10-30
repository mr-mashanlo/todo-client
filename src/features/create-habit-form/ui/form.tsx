import { Button, Description, Field, Fieldset, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type FC, type FormEvent } from 'react';
import z from 'zod';

import useCreateHabit from '../model/hook';

const CreateHabitForm: FC = () => {
  const { form } = useCreateHabit();

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const handleDaysChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const { checked, value } = e.target;
    const days = form.getFieldValue( 'days' );
    form.setFieldValue( 'days', checked ? [ ...days, value ] : days.filter( day => day !== value ) );
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-[25rem]">
      <legend className="text-2xl text-center font-bold">Create new habit</legend>
      <form.Field name="title" validators={{ onChange: z.string().min( 3, 'Must be at least 3 characters long' ) }} children={field =>
        <Field className="mt-8 relative">
          <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Lorem ipsum dolor sit amet consectetur" className="peer w-full py-3.5 px-5 rounded-xl bg-zinc-100 placeholder:text-zinc-400 data-[error=true]:bg-rose-50" />
          {!field.state.meta.isValid && <Description className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
        </Field>}
      />
      <Fieldset className="mt-8">
        <div className="grid grid-cols-7 relative">
          <form.Field name="days" validators={{ onChange: z.array( z.string() ).min( 1, 'Must select at least one option' ) }} children={field =>
            <>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '1' )} onChange={handleDaysChange} value="1" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center rounded-s-xl cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Mo</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '2' )} onChange={handleDaysChange} value="2" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Tu</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '3' )} onChange={handleDaysChange} value="3" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">We</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '4' )} onChange={handleDaysChange} value="4" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Th</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '5' )} onChange={handleDaysChange} value="5" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Fr</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '6' )} onChange={handleDaysChange} value="6" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Sa</Label>
              </Field>
              <Field>
                <Input type="checkbox" name={field.name} checked={form.getFieldValue( field.name ).includes( '0' )} onChange={handleDaysChange} value="0" className="peer sr-only" />
                <Label className="py-3.5 flex items-center justify-center rounded-e-xl cursor-pointer bg-zinc-100 text-zinc-400 font-bold peer-checked:text-black peer-focus:relative peer-focus:outline-2 peer-focus:outline-black">Su</Label>
              </Field>
              {!field.state.meta.isValid && <span className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</span>}
            </>
          }
          />
        </div>
      </Fieldset>
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
        <Button disabled={!canSubmit} type="submit" className="w-full mt-8 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">
          {isSubmitting ? '•••' : 'Create'}
        </Button> }
      />
    </form>
  );
};

export default CreateHabitForm;