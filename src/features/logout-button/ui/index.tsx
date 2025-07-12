import { useNavigate } from 'react-router-dom';

import { useUserStore } from '@/entities/user';

import { Button } from '@/shared';

export const LogoutButton = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };
  return (
    <Button
      variant="link"
      aria-label="Выйти из аккаунта"
      className="justify-start font-normal no-underline w-full max-w-[269px] hover:bg-secondary-hover focus:bg-secondary-focus px-3 py-2 rounded-xl"
      onClick={handleLogout}
    >
      <h4 className="text-sm">Выйти из аккаунта</h4>
    </Button>
  );
};
