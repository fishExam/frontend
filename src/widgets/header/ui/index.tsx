import { Settings, UserRound } from 'lucide-react';

import { Link } from 'react-router-dom';

import { UserInfo, useUserStore } from '@/entities/user';

import { LogoutButton } from '@/features/logout-button';
import { ThemeSelector } from '@/features/theme-selector';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/shared';

export const Header = () => {
  const user = useUserStore((state) => state.user);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header p-0 flex flex-row">
      <div className="flex justify-between items-center mx-auto px-3 max-w-[1440px] w-full h-[60px] sm:h-[66px]">
        <Link
          to={'/'}
          className="text-primary font-bold text-[28px] cursor-pointer focus-visible:ring-2 p-1"
        >
          {'fishexam'}
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="size-10.5 rounded-full bg-icon-primary hover:bg-icon-primary focus-visible:bg-primary-hover" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className=" flex flex-col items-center divide-y divide-separator-primary w-[250px] sm:w-[269px] py-6 font-onest"
          >
            <UserInfo className="w-full max-w-[269px]" />
            {user ? (
              <section className="flex flex-col items-start justify-center gap-2 py-2 px-3 w-full max-w-[269px]">
                <Link
                  to="/profile/account"
                  className="w-full max-w-[269px] hover:bg-secondary-hover focus:bg-secondary-focus px-3 py-2 rounded-xl"
                >
                  <div className="flex flex-row items-center gap-1">
                    <UserRound className="size-4" />
                    <h4 className="text-sm">Профиль</h4>
                  </div>
                </Link>
                <Link
                  to="/settings"
                  className="w-full max-w-[269px] hover:bg-secondary-hover focus:bg-secondary-focus px-3 py-2 rounded-xl"
                >
                  <div className="flex flex-row items-center gap-1">
                    <Settings className="size-4" />
                    <h4 className="text-sm">Настройки</h4>
                  </div>
                </Link>
              </section>
            ) : (
              <section className="flex flex-col items-start justify-center gap-2 py-2 px-3 w-full max-w-[269px]">
                <Link to="/login" className="w-full max-w-[245px]">
                  <Button className="w-full max-w-[245px]">Вход</Button>
                </Link>
                <Link to="/register/name" className="w-full max-w-[245px]">
                  <Button variant="secondary" className="w-full max-w-[245px]">
                    Регистрация
                  </Button>
                </Link>
              </section>
            )}
            <section className="flex flex-col items-center gap-2 py-2 px-3 w-full max-w-[269px]">
              <ThemeSelector />
              {user && <LogoutButton />}
            </section>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
