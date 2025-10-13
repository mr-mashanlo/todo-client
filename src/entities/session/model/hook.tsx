import { sessionService } from '../api/api';
import type { SessionDTOType } from './schema';

const useSession = () => {

  const signin = ( data: SessionDTOType ) => sessionService.signin( data );

  const signup = ( data: SessionDTOType ) => sessionService.signup( data );

  const signout = () => sessionService.signout();

  const refresh = () => sessionService.refresh();

  return { signin, signup, signout, refresh };

};

export default useSession;