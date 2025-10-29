import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Habit, useHabit } from '@/entities/habit';
import * as mappers from '@/shared/mappers';

const useUpdateHabit = ( { _id, title, days }: Habit ) => {
  const { update } = useHabit();

  const form = useForm( {
    defaultValues: { title, days },
    onSubmit: async ( { value, formApi } ) => {
      try {
        await update( { id: _id, data: value } );
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

export default useUpdateHabit;