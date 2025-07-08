import { z } from 'zod';

import { hasDigit, hasUppercase } from '../lib/utils';
import { MIN_PASSWORD_LENGTH } from './consts';

export const passwordSchema = z
  .string()
  .min(MIN_PASSWORD_LENGTH, 'Минимум 8 символов')
  .refine(hasUppercase, 'Минимум 1 заглавная буква')
  .refine(hasDigit, 'Минимум 1 цифра');

export const userLoginSchema = z.object({
  username: z.string().nonempty('Логин обязателен'),
  password: z.string().nonempty('Пароль обязателен'),
});

export const userRegisterSchema = () => {
  const allowedRoles = ['Студент', 'Преподаватель'] as const;
  return z.object({
    username: z.string().min(1, 'Логин обязателен'),
    role: z.enum(allowedRoles, {
      required_error: 'Роль обязательна',
      invalid_type_error: 'Выберите роль',
    }),
    name: z.string().nonempty('Полное имя обязательно'),
    password: passwordSchema,
  });
};

export type TUserLoginData = z.infer<typeof userLoginSchema>;
export type TUserRegisterData = z.infer<ReturnType<typeof userRegisterSchema>>;
