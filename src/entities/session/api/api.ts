import { kyInstance } from '@/shared/libs';

class SessionService {

  signin = async () => {
    return await kyInstance( 'session', { method: 'post' } );
  };

  signup = async () => {
    return await kyInstance( 'session', { method: 'post' } );
  };

  signout = async () => {
    return await kyInstance( 'session', { method: 'get' } );
  };

  refresh = async () => {
    return await kyInstance( 'session', { method: 'get' } );
  };

}

export const sessionService = new SessionService();