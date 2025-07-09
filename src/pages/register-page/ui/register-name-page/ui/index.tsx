import { NameForm } from '@/features/name-form';

import { LoginMethods } from '@/widgets/login-methods';

import { Separator } from '@/shared';

export const RegisterNamePage = () => {
  return (
    <>
      <LoginMethods />
      <div className="flex items-center gap-3 self-center w-full max-w-[213px]">
        <Separator className="flex-1" />
        <p className="text-muted-foreground text-xs">Или</p>
        <Separator className="flex-1" />
      </div>
      <NameForm />
    </>
  );
};
