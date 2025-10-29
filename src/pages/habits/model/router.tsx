import { type RouteObject } from 'react-router';

import HabitsPage from '../ui/page';

export const habitRouter: RouteObject = {
  path: '/habits',
  element: <HabitsPage />
};