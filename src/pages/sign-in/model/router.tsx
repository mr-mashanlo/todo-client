import { redirect, type RouteObject } from 'react-router';

import { useSessionStore } from '@/entities/session';

import SignInPage from '../ui/page';

export const signInRouter: RouteObject = {
  path: '/signin',
  element: <SignInPage />,
  loader: () => {
    if ( useSessionStore.getState().isAuthorized ) {
      return redirect( '/' );
    }
  }
};