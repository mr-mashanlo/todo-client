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
  const setIsAuthorized = useSessionStore( state => state.setIsAuthorized );

  const form = useForm( {
    defaultValues: { email: '', password: '' },
    onSubmit: async ( { value, formApi } ) => {
      try {
        await signin( value );
        setIsAuthorized( true );
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