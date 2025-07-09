import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore, validatePassword } from '@/entities/user';

import { Button, Form, PasswordInput, cn } from '@/shared';

import { NEXT_STEP, PREV_STEP } from '../model/consts';
import { type TPasswordUserSchema, passwordUserSchema } from '../model/schemas';

export const PasswordForm = () => {
  const navigate = useNavigate();
  const registerData = useUserStore((state) => state.registerData);
  const setRegisterData = useUserStore((state) => state.setRegisterData);

  const form = useForm({
    resolver: zodResolver(passwordUserSchema),
    defaultValues: { password: registerData?.password || '' },
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitted },
  } = form;

  const password = watch('password');

  const onPrev = () => navigate(PREV_STEP, { replace: true, relative: 'path' });
  const onSubmit = (formValues: TPasswordUserSchema) => {
    setRegisterData({ password: formValues.password });
    navigate(NEXT_STEP, { replace: true, relative: 'path' });
  };

  const { hasLength, hasUppercase, hasDigit } = isSubmitted
    ? validatePassword(password)
    : { hasLength: true, hasUppercase: true, hasDigit: true };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 w-full max-w-[340px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <PasswordInput
            name="password"
            labelName="Пароль"
            placeholder="Пароль"
            isFormMessageVisible={false}
          />
          <ul className="list-none">
            <li className={cn('text-sm', hasLength ? 'text-muted-foreground' : 'text-destructive')}>
              Минимум 8 символов
            </li>
            <li
              className={cn('text-sm', hasUppercase ? 'text-muted-foreground' : 'text-destructive')}
            >
              Минимум 1 заглавная буква
            </li>
            <li className={cn('text-sm', hasDigit ? 'text-muted-foreground' : 'text-destructive')}>
              Минимум 1 цифра
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2.5">
          <Button
            className="max-w-[165px] w-full"
            variant="secondary"
            type="button"
            onClick={onPrev}
          >
            Назад
          </Button>
          <Button className="max-w-[165px] w-full" type="submit">
            Продолжить
          </Button>
        </div>
      </form>
    </Form>
  );
};
