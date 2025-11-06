import { type RouteObject } from 'react-router';

import TodayPage from '../ui/page';

export const todayRouter: RouteObject = {
  path: '/today',
  element: <TodayPage />
};