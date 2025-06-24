import { z } from 'zod';

export const userLoginSchema = z.object({
  username: z.string().nonempty('Логин обязателен'),
  password: z.string().nonempty('Пароль обязателен'),
});

export const userRegisterSchema = () => {
  const allowedRoles = ['Студент', 'Преподаватель'] as const;
  return z.object({
    username: z.string().min(1, 'Логин обязателен'),
    roles: z.enum(allowedRoles, {
      required_error: 'Роль обязательна',
      invalid_type_error: 'Выберите роль из списка',
    }),
    surname: z.string().min(1, 'Фамилия обязательна'),
    firstname: z.string().min(1, 'Имя обязательно'),
    patronymic: z.string().optional(),
    password: z
      .string()
      .nonempty('Пароль обязателен')
      .min(8, 'Пароль слишком короткий')
      .max(32, 'Пароль слишком длинный'),
  });
};

export type TUserLoginData = z.infer<typeof userLoginSchema>;
export type TUserRegisterData = z.infer<ReturnType<typeof userRegisterSchema>>;
