import { type RouteObject } from 'react-router';

import SignInPage from '../ui/page';

export const signInRouter: RouteObject = {
  path: '/signin',
  element: <SignInPage />
};