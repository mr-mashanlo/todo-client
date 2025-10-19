import { type FC } from 'react';

import { TodoSection } from '@/widgets/todos';

export const HomePage: FC = () => {
  return (
    <div className="p-4 sm:p-10">
      <div className="max-w-2xl mx-auto">
        <TodoSection />
      </div>
    </div>
  );
};

export default HomePage;