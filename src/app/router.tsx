import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';

import MainLayer from './layers/main';
import SessionLayer from './layers/session';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <SessionLayer />,
        children: [ signInRouter, signUpRouter ]
      },
      {
        element: <MainLayer />,
        children: [ homeRouter ]
      }
    ]
  }
] );

export default router;