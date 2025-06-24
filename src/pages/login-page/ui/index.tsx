import { LoginForm } from '@/features/login-form';

import { AuthLayout } from '@/widgets/auth-layout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <h1>Вход</h1>
      <LoginForm />
    </AuthLayout>
  );
};
