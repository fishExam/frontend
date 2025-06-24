import { Link } from 'react-router-dom';

import { RegisterForm } from '@/features/register-form';

import { AuthLayout } from '@/widgets/auth-layout';

import { Button } from '@/shared';

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <h1>Регистрация</h1>
      <RegisterForm />
      <p>
        {'Есть аккаунт? '}
        <Link to="/login">
          <Button variant="link" className="font-regular p-0 text-md">
            Войти
          </Button>
        </Link>
      </p>
      <Link to="/">
        <Button variant="link" className="font-regular p-0 text-md">
          На главную страницу
        </Button>
      </Link>
    </AuthLayout>
  );
};
