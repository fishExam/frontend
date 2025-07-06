import { Button } from '@/shared';
import { GoogleLogo } from '@/shared';

import { useLogin } from '../model/hooks';

export const GoogleLoginButton = () => {
  const login = useLogin();

  return (
    <Button variant="secondary" onClick={() => login()} className="w-full font-medium font-roboto">
      <img src={GoogleLogo} alt="Google" className="w-4.5 h-4.5" />
      Войти с Google
    </Button>
  );
};
