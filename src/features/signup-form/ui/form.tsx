import { Button, Description, Field, Fieldset, Input, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { type FC, type FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import z from 'zod';

import { ClosedEyeIcon, EmailIcon, LockIcon, OpenEyeIcon } from '@/shared/icons';

import useSignUp from '../model/hook';

interface Props {
  setMood?: ( mood: 'neutral' | 'angry' | 'sad' ) => void
}

const SignUpForm: FC<Props> = ( { setMood } ) => {
  const navigate = useNavigate();
  const form = useSignUp( { onSuccess: () => navigate( '/' ) } );
  const canSubmit = useStore( form.store, ( state ) => state.canSubmit );
  const [ isPasswordVisible, setIsPasswordVisible ] = useState<boolean>( false );

  const handleSubmitForm = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const handlePasswordClick = () => {
    setIsPasswordVisible( prev => !prev );
    setMood?.( isPasswordVisible ? 'sad' : 'neutral' );
  };

  useEffect( () => {
    setMood?.( isPasswordVisible ? 'sad' : canSubmit ? 'neutral' : 'angry' );
  }, [ setMood, isPasswordVisible, canSubmit ] );

  return (
    <form onSubmit={handleSubmitForm} className="w-full sm:w-[25rem]">
      <Fieldset>
        <Legend className="text-2xl text-center font-bold">Sign up</Legend>
        <form.Field name="email" validators={{ onChange: z.email( 'Invalid email address' ) }} children={field =>
          <Field className="block mt-8 relative">
            <Input id={field.name} name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} type="email" placeholder="name@company.com" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB] data-[error=true]:bg-rose-50" />
            <EmailIcon className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />
            {!field.state.meta.isValid && <Description className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
          </Field> }
        />
        <form.Field name="password" validators={{ onChange: z.string().min( 8, 'Must be at least 8 characters long' ) }} children={field =>
          <Field className="block mt-8 relative">
            <Input id={field.name} name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} type={isPasswordVisible ? 'text' : 'password'} placeholder="•••••••••" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB] data-[error=true]:bg-rose-50" />
            <LockIcon className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />
            <Button onClick={handlePasswordClick} type="button" className="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
              {isPasswordVisible ? <OpenEyeIcon className="w-5 h-5 fill-[#C2C3CB]" /> : <ClosedEyeIcon className="w-5 h-5 fill-[#C2C3CB]" />}
            </Button>
            {!field.state.meta.isValid && <Description className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
          </Field> }
        />
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
          <Button disabled={!canSubmit} type="submit" className="w-full mt-8 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">
            {isSubmitting ? '•••' : 'Sign up'}
          </Button> }
        />
      </Fieldset>
      <p className="mt-5 text-center leading-6">Already have an account? <Link to="/signin" className="font-bold hover:underline">Log in</Link></p>
    </form>
  );
};

export default SignUpForm;