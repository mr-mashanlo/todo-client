import { type FC } from 'react';

import { TodoSection } from '@/widgets/todos';

export const HomePage: FC = () => {
  return (
    <div className="p-10">
      <TodoSection />
    </div>
  );
};

export default HomePage;