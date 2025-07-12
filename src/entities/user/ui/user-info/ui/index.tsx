import { UserRound } from 'lucide-react';

import { useUserStore } from '@/entities/user/model/store';

import { cn } from '@/shared';

type UserInfoProps = {
  className?: string;
};

export const UserInfo = ({ className }: UserInfoProps) => {
  const user = useUserStore((state) => state.user);

  const name = user ? user.name : 'Гость';
  const username = user ? user.username : 'Вы не вошли в аккаунт';
  return (
    <section className={cn('flex flex-col items-center text-center gap-0', className)}>
      <div className="flex items-center justify-center size-10.5 rounded-full bg-icon-primary">
        {user ? null : <UserRound className="size-4 text-primary-foreground" />}
      </div>
      <div className="flex flex-col items-center text-center py-2">
        <h1 className="text-sm">{name}</h1>
        <p className="text-xs text-muted-foreground">{username}</p>
      </div>
    </section>
  );
};
