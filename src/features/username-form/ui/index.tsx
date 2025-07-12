import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore } from '@/entities/user';

import { Button, Form, FormInput } from '@/shared';

import { NEXT_STEP, PREV_STEP } from '../model/consts';
import { type TUsernameUserSchema, usernameUserSchema } from '../model/schemas';

export const UsernameForm = () => {
  const navigate = useNavigate();
  const registerData = useUserStore((state) => state.registerData);
  const setRegisterData = useUserStore((state) => state.setRegisterData);

  const form = useForm({
    resolver: zodResolver(usernameUserSchema),
    defaultValues: { username: registerData?.username || '' },
  });

  const { handleSubmit } = form;

  const onPrev = () => navigate(PREV_STEP, { replace: true, relative: 'path' });
  const onSubmit = (formValues: TUsernameUserSchema) => {
    setRegisterData({ username: formValues.username });
    navigate(NEXT_STEP, { replace: true, relative: 'path' });
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 w-full max-w-[340px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 max-w-[340px]">
          <FormInput name="username" labelName="Логин" placeholder="username" />
          <p className="text-muted-foreground text-sm">
            Это ваш уникальный логин для входа.
            <br />
            Используется только для авторизации — его никто не увидит.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full max-w-[340px]">
          <Button
            className="flex-1 min-w-[120px]"
            variant="secondary"
            type="button"
            onClick={onPrev}
          >
            Назад
          </Button>
          <Button className="flex-1 min-w-[120px]" type="submit">
            Продолжить
          </Button>
        </div>
      </form>
    </Form>
  );
};
