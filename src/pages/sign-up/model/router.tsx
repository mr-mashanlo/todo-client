import { type RouteObject } from 'react-router';

import SignUpPage from '../ui/page';

export const signUpRouter: RouteObject = {
  path: '/signup',
  element: <SignUpPage />
};