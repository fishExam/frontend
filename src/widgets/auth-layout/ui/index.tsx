import type { ReactNode } from 'react';

import { cn } from '@/shared';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen mx-auto box-border">
      <div
        className={cn(
          'flex flex-col justify-start items-center p-10',
          'w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[720px]',
        )}
      >
        {children}
      </div>
    </div>
  );
};
