import { type FC } from 'react';
import { Outlet } from 'react-router';

const SessionLayer: FC = () => {
  return (
    <section className="min-h-screen">
      <Outlet />
    </section>
  );
};

export default SessionLayer;