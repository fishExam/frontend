import { Link, Outlet } from 'react-router-dom';

import { AuthLayout } from '@/widgets/auth-layout';
import { LoginMethods } from '@/widgets/login-methods';

import { Button, Separator } from '@/shared';

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-2">
        <h1 className="max-[425px]:text-2xl max-[480px]:text-3xl text-4xl text-center font-extrabold">
          Создайте аккаунт
        </h1>
        <p className="max-[425px]:text-[16px] text-lg font-normal text-center">
          Заполните поля снизу для регистрации
        </p>
      </div>
      <LoginMethods />
      <div className="flex items-center gap-3 self-center w-full max-w-[213px]">
        <Separator className="flex-1" />
        <p className="text-muted-foreground text-xs">Или</p>
        <Separator className="flex-1" />
      </div>
      <Outlet />
      <p className="text-sm text-center">
        {'Уже есть аккаунт? '}
        <Link to="/login">
          <Button variant="link" className="font-regular p-0 text-md">
            Войти
          </Button>
        </Link>
      </p>
    </AuthLayout>
  );
};
