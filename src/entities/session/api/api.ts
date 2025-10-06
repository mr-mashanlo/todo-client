import { kyInstance } from '@/shared/libs';

import { type SessionType } from '../model/schema';

class SessionService {

  signin = async ( data: SessionType ) => {
    return await kyInstance( 'session/signin', { method: 'post', body: JSON.stringify( data ) } );
  };

  signup = async ( data: SessionType ) => {
    return await kyInstance( 'session/signup', { method: 'post', body: JSON.stringify( data ) } );
  };

  signout = async ( id: string ) => {
    return await kyInstance( `session/signout/${id}`, { method: 'get' } );
  };

  refresh = async ( id: string ) => {
    return await kyInstance( `session/refresh/${id}`, { method: 'get' } );
  };

}

export const sessionService = new SessionService();