import { sessionService } from '../api/api';
import type { SessionDTO } from './schema';

const useSession = () => {

  const signin = ( data: SessionDTO ) => sessionService.signin( data );

  const signup = ( data: SessionDTO ) => sessionService.signup( data );

  const signout = () => sessionService.signout();

  const refresh = () => sessionService.refresh();

  return { signin, signup, signout, refresh };

};

export default useSession;