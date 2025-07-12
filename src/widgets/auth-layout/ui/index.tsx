import type { ReactNode } from 'react';

import { Header } from '@/widgets/header';

import { Card, cn } from '@/shared';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full min-h-screen mx-auto box-border py-20">
        <Card
          className={cn(
            'flex flex-col items-center py-16 px-7 gap-6 shadow-0 rounded-[20px]',
            'w-full max-w-[820px]',
          )}
        >
          {children}
        </Card>
      </div>
    </>
  );
};
