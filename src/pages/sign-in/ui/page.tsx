import { type FC } from 'react';

import { SignInForm } from '@/features/signin-form';

const SigninPage: FC = () => {
  return (
    <main aria-labelledby="heading" className="min-h-screen p-5 flex items-center justify-center">
      <SignInForm />
    </main>
  );
};

export default SigninPage;