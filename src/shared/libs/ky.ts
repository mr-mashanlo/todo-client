import ky from 'ky';

import { useSessionStore } from '@/entities/session';

export const kyInstance = ky.create( {
  prefixUrl: 'http://localhost:4173',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 400 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  },
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        if ( response.status === 401 ) {
          useSessionStore.getState().setIsAuthorized( false );
        }
      }
    ]
  }
} );