import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useSession, useSessionStore } from '@/entities/session';
import { mapServerErrors } from '@/shared/mappers';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

const useSigninForm = ( { onSuccess, onError }: Props = {} ) => {
  const { signin } = useSession();
  const setID = useSessionStore( state => state.setID );

  const form = useForm( {
    defaultValues: { email: '', password: '' },
    onSubmit: async ( { value, formApi } ) => {
      try {
        const response = await signin( value );
        const { id } = await response.json();
        setID( id );
        onSuccess?.();
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.issues ) } } );
        }
        onError?.();
      }
    }
  } );

  return form;
};

export default useSigninForm;