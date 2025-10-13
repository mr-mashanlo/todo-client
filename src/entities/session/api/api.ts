import type { KyResponse } from 'ky';

import { kyInstance } from '@/shared/libs';

import type { SessionDTOType, SessionType } from '../model/schema';

class SessionService {

  signin = ( data: SessionDTOType ): Promise<KyResponse<SessionType>> => {
    return kyInstance( 'session/signin', { method: 'post', body: JSON.stringify( data ) } );
  };

  signup = ( data: SessionDTOType ): Promise<KyResponse<SessionType>> => {
    return kyInstance( 'session/signup', { method: 'post', body: JSON.stringify( data ) } );
  };

  signout = (): Promise<KyResponse<{ ok: boolean }>> => {
    return kyInstance( 'session/signout', { method: 'get' } );
  };

  refresh = (): Promise<KyResponse<SessionType>> => {
    return kyInstance( 'session/refresh', { method: 'get' } );
  };

}

export const sessionService = new SessionService();