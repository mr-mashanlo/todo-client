import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';

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
            children: [ homeRouter ]
          }
        ]
      }
    ]
  }
] );

export default router;