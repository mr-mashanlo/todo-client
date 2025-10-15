import { redirect, type RouteObject } from 'react-router';

import { useSessionStore } from '@/entities/session';

import HomePage from '../ui/page';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />,
  loader: () => {
    if ( !useSessionStore.getState().isAuthorized ) {
      return redirect( '/signin' );
    }
  }
};