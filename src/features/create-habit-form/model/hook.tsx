import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useHabit } from '@/entities/habit';
import * as mappers from '@/shared/mappers';

const useCreateHabitForm = () => {
  const { create } = useHabit();
  const today = new Date( Date.now() );

  const form = useForm( {
    defaultValues: {
      title: '',
      days: [ String( today.getDay() ) ]
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create( { data: value } );
        formApi.reset( undefined, { keepDefaultValues: false } );
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mappers.mapServerErrors( errors.issues ) } } );
        }
      }
    }
  } );

  return form;
};

export default useCreateHabitForm;