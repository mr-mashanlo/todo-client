import { type FC, useState } from 'react';

import { SignUpForm } from '@/features/signup-form';
import { Family } from '@/widgets/family';

const SignupPage: FC = () => {
  const [ mood, setMood ] = useState<'neutral' | 'angry' | 'sad'>( 'neutral' );

  return (
    <section className="w-full h-screen p-4 sm:p-15 grid sm:grid-cols-2 gap-10 sm:gap-4">
      <div className="flex justify-center items-center">
        <Family mood={mood} />
      </div>
      <div className="flex justify-center items-center">
        <SignUpForm setMood={setMood} />
      </div>
    </section>
  );
};

export default SignupPage;