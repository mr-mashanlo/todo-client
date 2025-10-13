import { redirect, type RouteObject } from 'react-router';

import { useSessionStore } from '@/entities/session';

import SignUpPage from '../ui/page';

export const signUpRouter: RouteObject = {
  path: '/signup',
  element: <SignUpPage />,
  loader: () => {
    if ( useSessionStore.getState().id ) {
      return redirect( '/' );
    }
  }
};