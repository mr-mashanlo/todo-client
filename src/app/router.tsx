import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';
import { signInRouter } from '@/pages/sign-in';

import MainLayer from './layers/main';
import SessionLayer from './layers/session';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <SessionLayer />,
        children: [ signInRouter ]
      },
      {
        element: <MainLayer />,
        children: [ homeRouter ]
      }
    ]
  }
] );

export default router;