import { type FC } from 'react';
import { Outlet } from 'react-router';

const SessionLayout: FC = () => {
  return (
    <main className="min-h-screen p-4 sm:p-5 flex items-center justify-center">
      <Outlet />
    </main>
  );
};

export default SessionLayout;