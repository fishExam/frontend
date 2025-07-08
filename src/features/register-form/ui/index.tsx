import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type TUserRegisterData, userRegisterSchema } from '@/entities/user';

import { Button, Form, FormInput, PasswordInput } from '@/shared';

import { PasswordRequirements } from './password-requirements';
import { RoleSelector } from './role-selector';

export const RegisterForm = () => {
  const form = useForm<TUserRegisterData>({
    resolver: zodResolver(userRegisterSchema()),
    defaultValues: {
      username: '',
      name: '',
      role: undefined,
      password: '',
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (formValues: TUserRegisterData) => {
    console.log(formValues);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 w-full max-w-[340px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 max-w-[340px]">
          <FormInput name="name" labelName="Ваше полное имя" placeholder="Иванов Иван Иванович" />
          <p className="text-muted-foreground text-sm">
            Введите ваше настоящее имя и фамилию.
            <br />
            Преподаватели и ученики увидят его в заданиях и списках.
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-[340px]">
          <FormInput name="username" labelName="Логин" placeholder="username" />
          <p className="text-muted-foreground text-sm">
            Это ваш уникальный логин для входа.
            <br />
            Используется только для авторизации — его никто не увидит.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <PasswordInput
            name="password"
            labelName="Пароль"
            placeholder="Пароль"
            isFormMessageVisible={false}
          />
          <PasswordRequirements />
        </div>
        <RoleSelector />
        <Button>Зарегистрироваться</Button>
      </form>
    </Form>
  );
};
