import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type TUserLoginData, userLoginSchema } from '@/entities/user';

import { Button, Form, FormInput, PasswordInput } from '@/shared';

export const LoginForm = () => {
  const form = useForm<TUserLoginData>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (formValues: TUserLoginData) => {
    console.log(formValues);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <FormInput name="username" labelName="Логин" />
        <PasswordInput name="password" labelName="Пароль" />
        <Button>Вход</Button>
      </form>
    </Form>
  );
};
