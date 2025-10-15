import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreType {
  isAuthorized: boolean,
  setIsAuthorized: ( status: boolean ) => void,
};

const persistStore = persist<StoreType>( set => ( {
  isAuthorized: false,
  setIsAuthorized: status => set( { isAuthorized: status } )
} ), { name: 'session' } );

export const useSessionStore = create( persistStore );