import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreType {
  id: string | null,
  setID: ( id: string | null ) => void
};

const persistStore =  persist<StoreType>( set => ( {
  id: null,
  setID: id => set( { id } )
} ), { name: 'session' } );

export const useSessionStore = create( persistStore );