import { type FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useSessionStore } from '@/entities/session';

const PublicLayout: FC = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useSessionStore();

  useEffect( () => {
    if ( isAuthorized ) navigate( '/', { replace: true } );
  }, [ isAuthorized, navigate ] );

  return isAuthorized ? null : <Outlet />;
};

export default PublicLayout;