import { createBrowserRouter } from 'react-router';

import { habitRouter } from '@/pages/habits';
import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';
import { todayRouter } from '@/pages/today';

import MainLayout from './layouts/main';
import ProtectedLayout from './layouts/protected';
import PublicLayout from './layouts/public';
import SessionLayout from './layouts/session';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            element: <SessionLayout />,
            children: [ signInRouter, signUpRouter ]
          }
        ]
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <MainLayout />,
            children: [ todayRouter, habitRouter ]
          }
        ]
      },
      {
        element: <MainLayout />,
        children: [ homeRouter, notFoundRouter ]
      }
    ]
  }
] );

export default router;