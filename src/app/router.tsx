import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        children: [ homeRouter ]
      }
    ]
  }
] );

export default router;