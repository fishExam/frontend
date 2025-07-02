import { Link } from 'react-router-dom';

import { GoogleLoginButton } from '@/features/google-login-button';
import { LoginForm } from '@/features/login-form';

import { AuthLayout } from '@/widgets/auth-layout';

import { Button } from '@/shared';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-2">
        <h1 className="max-[400px]:text-2xl max-[425px]:text-3xl text-4xl text-center font-extrabold">
          Войдите в аккаунт
        </h1>
        <p className="text-lg font-normal">Заполните поля снизу для входа</p>
      </div>
      <GoogleLoginButton />
      <LoginForm />
      <p>
        {'Нет аккаунта? '}
        <Link to="/register">
          <Button variant="link" className="font-regular p-0 text-md">
            Зарегистрироваться
          </Button>
        </Link>
      </p>
    </AuthLayout>
  );
};
