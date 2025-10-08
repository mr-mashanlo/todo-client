import { Button, Description, Field, Fieldset, Input, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { type FC, type FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import z from 'zod';

import useSigninForm from '../model/hook';

interface Props {
  setMood?: ( mood: 'neutral' | 'angry' | 'sad' ) => void
}

const SignInForm: FC<Props> = ( { setMood } ) => {
  const navigate = useNavigate();
  const form = useSigninForm( { onSuccess: () => navigate( '/' ) } );
  const canSubmit = useStore( form.store, ( state ) => state.canSubmit );
  const [ isPasswordVisible, setIsPasswordVisible ] = useState<boolean>( false );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
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
    <form onSubmit={handleFormSubmit} className="w-full sm:w-[25rem]">
      <Fieldset>
        <Legend className="text-2xl text-center font-bold">Sign in</Legend>
        <form.Field name="email" validators={{ onChange: z.email( 'Invalid email address' ) }} children={field =>
          <Field className="block mt-8 relative">
            <Input id={field.name} name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} type="email" placeholder="name@company.com" className="peer w-full p-3.5 pl-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB] data-[error=true]:bg-rose-50" />
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.94165 7.80858C0.604829 10.7975 0.619843 14.2448 1.08853 17.2216C1.34787 18.8687 2.75539 20.1315 4.49282 20.2757L6.30859 20.4265C10.0947 20.7408 13.9023 20.7408 17.6885 20.4265L19.5042 20.2757C21.2417 20.1315 22.6492 18.8687 22.9085 17.2216C23.3772 14.2448 23.3923 10.7977 23.0554 7.80876C23.0119 7.46224 22.9629 7.11619 22.9085 6.77072C22.6492 5.12358 21.2417 3.86084 19.5042 3.71659L17.6885 3.56583C13.9023 3.25149 10.0947 3.25149 6.30859 3.56583L4.49281 3.71659C2.75539 3.86084 1.34787 5.12358 1.08853 6.77072C1.03415 7.11613 0.985188 7.46212 0.94165 7.80858ZM6.46477 5.28184C10.147 4.97613 13.85 4.97613 17.5323 5.28184L19.348 5.43259C20.255 5.50789 20.9897 6.16705 21.1251 7.02686C21.1392 7.11615 21.1528 7.20548 21.1661 7.29485L14.48 10.8425C12.9368 11.6614 11.0602 11.6614 9.51692 10.8425L2.83092 7.29489C2.84422 7.20551 2.8579 7.11616 2.87196 7.02686C3.00733 6.16705 3.74206 5.50789 4.649 5.43259L6.46477 5.28184ZM21.3868 9.1482C21.62 11.7523 21.5328 14.376 21.1251 16.9655C20.9897 17.8253 20.255 18.4844 19.3481 18.5597L17.5323 18.7105C13.8501 19.0162 10.147 19.0162 6.46478 18.7105L4.649 18.5597C3.74206 18.4844 3.00733 17.8253 2.87196 16.9654C2.46426 14.3761 2.37702 11.7523 2.61023 9.14824L8.64108 12.3482C10.7291 13.4561 13.2679 13.4561 15.3559 12.3482L21.3868 9.1482Z" />
            </svg>
            {!field.state.meta.isValid && <Description className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
          </Field> }
        />
        <form.Field name="password" validators={{ onChange: z.string().min( 8, 'Must be 8 or more characters long' ) }} children={field =>
          <Field className="block mt-8 relative">
            <Input id={field.name} name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} type={isPasswordVisible ? 'text' : 'password'} placeholder="•••••••••" className="peer w-full p-3.5 px-11 rounded-xl bg-[#f5f5f5] placeholder:text-[#C2C3CB] data-[error=true]:bg-rose-50" />
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#C2C3CB] peer-focus:fill-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true">
              <path d="M10.158 16.9747C10.158 15.9584 10.9819 15.1346 11.9981 15.1346C13.0144 15.1346 13.8383 15.9584 13.8383 16.9747C13.8383 17.991 13.0144 18.8148 11.9981 18.8148C10.9819 18.8148 10.158 17.991 10.158 16.9747Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6.62696 10.3467L6.23999 6.86393C6.19037 6.41742 6.19037 5.96678 6.23999 5.52027L6.26792 5.26891C6.56416 2.60268 8.66021 0.493069 11.3245 0.179627C11.772 0.126973 12.2242 0.126973 12.6718 0.179627C15.336 0.493069 17.4321 2.60268 17.7283 5.26891L17.7562 5.52027C17.8059 5.96678 17.8059 6.41742 17.7562 6.86393L17.3693 10.3467L18.2116 10.4139C19.5398 10.5199 20.6244 11.5184 20.8397 12.8334C21.2888 15.576 21.2888 18.3734 20.8397 21.116C20.6244 22.431 19.5398 23.4294 18.2116 23.5355L16.3762 23.682C13.4622 23.9146 10.5342 23.9146 7.62018 23.682L5.78479 23.5355C4.45654 23.4294 3.37195 22.431 3.15664 21.116C2.70755 18.3734 2.70755 15.576 3.15664 12.8334C3.37195 11.5184 4.45654 10.5199 5.78479 10.4139L6.62696 10.3467ZM11.5395 2.00716C11.8442 1.97132 12.152 1.97132 12.4568 2.00716C14.2707 2.22057 15.6977 3.65686 15.8994 5.47212L15.9274 5.72348C15.962 6.03494 15.962 6.34927 15.9274 6.66072L15.5334 10.2066C13.179 10.055 10.8173 10.055 8.46286 10.2066L8.06887 6.66073C8.03427 6.34927 8.03427 6.03494 8.06887 5.72348L8.0968 5.47212C8.2985 3.65686 9.72556 2.22057 11.5395 2.00716ZM16.2297 12.1017C13.4132 11.8768 10.5832 11.8768 7.76662 12.1017L5.93122 12.2482C5.44674 12.2869 5.05113 12.6511 4.97259 13.1307C4.55576 15.6764 4.55576 18.273 4.97259 20.8187C5.05113 21.2983 5.44674 21.6625 5.93122 21.7012L7.76662 21.8477C10.5832 22.0725 13.4132 22.0725 16.2297 21.8477L18.0651 21.7012C18.5496 21.6625 18.9452 21.2983 19.0238 20.8187C19.4406 18.273 19.4406 15.6764 19.0238 13.1307C18.9452 12.6511 18.5496 12.2869 18.0651 12.2482L16.2297 12.1017Z" />
            </svg>
            <Button onClick={handlePasswordClick} type="button" className="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
              {
                isPasswordVisible
                  ?
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-[#C2C3CB]">
                    <path d="M11.9897 4.5C18.0646 4.50005 22.8498 9.561 22.8501 11.7998L22.8364 12.0928C22.5503 15.1637 17.8751 19.5 11.9897 19.5C5.91478 19.4999 1.1499 14.8998 1.1499 11.7998C1.15015 9.46926 5.91494 4.50013 11.9897 4.5ZM11.9897 6.17969C9.40846 6.17975 7.05415 7.24159 5.33057 8.59668C4.47238 9.27144 3.8104 9.98875 3.37744 10.623C2.91117 11.3062 2.8297 11.7137 2.82959 11.7998C2.82959 12.5993 3.55409 14.0921 5.33154 15.4932C7.02306 16.8264 9.37451 17.8203 11.9897 17.8203C14.6034 17.8203 16.9605 16.8227 18.6587 15.4854C20.4452 14.0784 21.1694 12.5854 21.1694 11.7998C21.169 11.7936 21.1619 11.6891 21.0747 11.4736C20.9873 11.2578 20.8414 10.9845 20.6235 10.668C20.1868 10.0336 19.5196 9.31074 18.6567 8.62891C16.9224 7.25854 14.5632 6.17971 11.9897 6.17969ZM12.2134 7.90625C14.4062 8.01736 16.1499 9.83034 16.1499 12.0508L16.145 12.2637C16.0339 14.4563 14.2207 16.1999 12.0005 16.2002L11.7866 16.1953C9.66454 16.0878 7.96355 14.3857 7.85596 12.2637L7.8501 12.0508C7.8501 9.75875 9.70845 7.90039 12.0005 7.90039L12.2134 7.90625ZM12.0005 9.56055C10.6253 9.56055 9.51025 10.6756 9.51025 12.0508C9.51063 13.4257 10.6255 14.54 12.0005 14.54C13.3752 14.5397 14.4894 13.4255 14.4897 12.0508C14.4897 10.6757 13.3755 9.56084 12.0005 9.56055Z"/>
                  </svg>
                  :
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-[#C2C3CB]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.4832 3.69339C21.8088 3.36777 21.8088 2.83983 21.4832 2.51421C21.1575 2.18858 20.6296 2.18858 20.304 2.51421L2.516 20.3022C2.19038 20.6278 2.19038 21.1557 2.516 21.4814C2.84162 21.807 3.36956 21.807 3.69519 21.4814L6.86022 18.3163C8.37921 19.0314 10.1287 19.5021 11.9996 19.5021C14.9835 19.5021 17.6588 18.3046 19.5824 16.8283C20.546 16.0887 21.3418 15.2636 21.904 14.4535C22.4507 13.6657 22.8391 12.8012 22.8391 11.9978C22.8391 11.1943 22.4507 10.3298 21.904 9.54209C21.3418 8.73196 20.546 7.90686 19.5824 7.16727C19.2909 6.94361 18.9823 6.72634 18.6579 6.51868L21.4832 3.69339ZM17.4466 7.72992L15.4779 9.69864C15.9144 10.3577 16.1686 11.1481 16.1686 11.9978C16.1686 14.3003 14.3021 16.1668 11.9996 16.1668C11.1499 16.1668 10.3595 15.9126 9.70043 15.4761L8.1254 17.0511C9.31 17.5337 10.6234 17.8345 11.9996 17.8345C14.5416 17.8345 16.8693 16.8084 18.567 15.5054C19.4141 14.8553 20.0836 14.1517 20.534 13.5027C20.9999 12.8313 21.1715 12.3061 21.1715 11.9978C21.1715 11.6895 20.9999 11.1643 20.534 10.4929C20.0836 9.84383 19.4141 9.14028 18.567 8.49018C18.2189 8.22296 17.8442 7.96739 17.4466 7.72992ZM10.9211 14.2554C11.2477 14.4117 11.6134 14.4992 11.9996 14.4992C13.3811 14.4992 14.501 13.3793 14.501 11.9978C14.501 11.6116 14.4135 11.2459 14.2572 10.9193L10.9211 14.2554Z"/>
                    <path d="M11.9996 4.49348C13.1473 4.49348 14.2493 4.67063 15.2805 4.97266C15.4789 5.03077 15.538 5.27907 15.3918 5.42524L14.4751 6.34194C14.4063 6.4107 14.3067 6.43825 14.2119 6.41644C13.5011 6.2529 12.7599 6.16111 11.9996 6.16111C9.45751 6.16111 7.12988 7.18716 5.43212 8.49018C4.58508 9.14028 3.91558 9.84383 3.46516 10.4929C2.99921 11.1643 2.82766 11.6895 2.82766 11.9978C2.82766 12.3061 2.99921 12.8313 3.46516 13.5027C3.85853 14.0695 4.41899 14.6779 5.11887 15.256C5.24767 15.3624 5.25995 15.5571 5.14182 15.6752L4.35369 16.4633C4.25329 16.5637 4.09309 16.5726 3.98429 16.4813C3.21387 15.8352 2.57087 15.139 2.09513 14.4535C1.54845 13.6657 1.16003 12.8012 1.16003 11.9978C1.16003 11.1943 1.54845 10.3298 2.09513 9.54209C2.65735 8.73196 3.45315 7.90686 4.41679 7.16727C6.34039 5.69093 9.01563 4.49348 11.9996 4.49348Z"/>
                    <path d="M11.9996 7.82873C12.1313 7.82873 12.2616 7.83484 12.3902 7.84678C12.609 7.86712 12.6882 8.1288 12.5328 8.28422L11.1851 9.63194C10.4588 9.88194 9.88373 10.457 9.63374 11.1833L8.28601 12.531C8.13059 12.6865 7.86891 12.6072 7.84858 12.3884C7.83663 12.2598 7.83052 12.1295 7.83052 11.9978C7.83052 9.69528 9.69707 7.82873 11.9996 7.82873Z"/>
                  </svg>
              }
            </Button>
            {!field.state.meta.isValid && <Description className="px-4 text-xs text-rose-400 absolute -bottom-5">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
          </Field> }
        />
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
          <Button disabled={!canSubmit} type="submit" className="w-full mt-8 p-3.5 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">
            {isSubmitting ? '•••' : 'Sign in'}
          </Button> }
        />
      </Fieldset>
      <p className="mt-5 text-center leading-6">Don&apos;t have an account? <Link to="/signup" className="font-bold hover:underline">Register</Link></p>
    </form>
  );
};

export default SignInForm;