import { useFormState, useWatch } from 'react-hook-form';

import { validatePassword } from '@/entities/user';

import { cn } from '@/shared';

export const PasswordRequirements = () => {
  const password = useWatch({ name: 'password' });
  const { isSubmitted } = useFormState();

  const { hasLength, hasUppercase, hasDigit } = isSubmitted
    ? validatePassword(password)
    : { hasLength: true, hasUppercase: true, hasDigit: true };

  return (
    <ul className="list-none">
      <li className={cn('text-sm', hasLength ? 'text-muted-foreground' : 'text-destructive')}>
        Минимум 8 символов
      </li>
      <li className={cn('text-sm', hasUppercase ? 'text-muted-foreground' : 'text-destructive')}>
        Минимум 1 заглавная буква
      </li>
      <li className={cn('text-sm', hasDigit ? 'text-muted-foreground' : 'text-destructive')}>
        Минимум 1 цифра
      </li>
    </ul>
  );
};
