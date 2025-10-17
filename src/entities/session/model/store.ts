import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  isAuthorized: boolean,
  setIsAuthorized: ( status: boolean ) => void,
};

const persistStore = persist<Store>( set => ( {
  isAuthorized: false,
  setIsAuthorized: status => set( { isAuthorized: status } )
} ), { name: 'session' } );

export const useSessionStore = create( persistStore );