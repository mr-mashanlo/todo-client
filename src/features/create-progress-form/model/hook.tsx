import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';
import moment from 'moment';

import { useProgress } from '@/entities/progress';
import { mapServerErrors } from '@/shared/mappers';

const useCreateProgress = () => {
  const { create, today } = useProgress();

  const form = useForm( {
    defaultValues: {
      habits: today ? today.habits : []
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        const date = moment().format( 'YYYYMMDD' );
        console.log( { date, ...value } );
        await create( { data: { date, ...value } } );
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.issues ) } } );
        }
      }
    }
  } );

  return form;
};

export default useCreateProgress;