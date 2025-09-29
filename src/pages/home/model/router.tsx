import { type RouteObject } from 'react-router';

import HomePage from '../ui/home';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />
};