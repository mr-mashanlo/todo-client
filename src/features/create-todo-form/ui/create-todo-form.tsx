import { useForm } from '@tanstack/react-form';
import { type FC, type FormEvent } from 'react';

const CreateTodoForm: FC = () => {
  const form = useForm( {
    defaultValues: { title: '' },
    onSubmit: async ( { value } ) => { console.log( value ); }
  } );

  const handleSubmitForm = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <form.Field name="title"
        children={field => (
          <>
            <label htmlFor={field.name}>Title</label>
            <input id={field.name} name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={( e ) => field.handleChange( e.target.value )} />
          </>
        )}
      />
    </form>
  );
};

export default CreateTodoForm;