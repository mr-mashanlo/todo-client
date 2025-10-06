import { sessionService } from '../api/api';
import type { SessionType } from './schema';

const useSession = () => {

  const signin = async ( data: SessionType ) => await sessionService.signin( data );

  const signup = async ( data: SessionType ) => await sessionService.signup( data );

  const signout = async ( id: string ) => await sessionService.signout( id );

  const refresh = async ( id: string ) => await sessionService.refresh( id );

  return { signin, signup, signout, refresh };

};

export default useSession;