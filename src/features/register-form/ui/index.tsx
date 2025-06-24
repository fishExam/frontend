import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type TUserRegisterData, userRegisterSchema } from '@/entities/user';

import {
  Button,
  Form,
  FormControl,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  PasswordInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  cn,
} from '@/shared';

import { allowedRoles } from '../model/consts';

export const RegisterForm = () => {
  const form = useForm<TUserRegisterData>({
    resolver: zodResolver(userRegisterSchema()),
    defaultValues: {
      username: '',
      firstname: '',
      surname: '',
      patronymic: '',
      role: undefined,
      password: '',
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (formValues: TUserRegisterData) => {
    console.log(formValues);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <FormInput name="username" labelName="Логин" />
        <FormInput name="surname" labelName="Фамилия" />
        <FormInput name="firstname" labelName="Имя" />
        <FormInput name="patronymic" labelName="Отчество" />
        <Controller
          control={control}
          name="role"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Роль</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ''}>
                <FormControl>
                  <SelectTrigger
                    className={cn('w-full', fieldState.error ? 'border-destructive' : '')}
                  >
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Роли</SelectLabel>
                    {allowedRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <PasswordInput name="password" labelName="Пароль" />
        <PasswordInput name="repeatPassword" labelName="Повторите пароль" />
        <Button>Зарегистрироваться</Button>
      </form>
    </Form>
  );
};
