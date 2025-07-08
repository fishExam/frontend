import { MIN_PASSWORD_LENGTH } from '../model/consts';
import { passwordSchema } from '../model/schemas';

export const hasUppercase = (value: string) => /[A-ZА-ЯЁ]/.test(value);
export const hasDigit = (value: string) => /\d/.test(value);

export const validatePassword = (password: string) => {
  const result = passwordSchema.safeParse(password);

  if (result.success) {
    return {
      hasLength: password.length > 0,
      hasUppercase: hasUppercase(password),
      hasDigit: hasDigit(password),
    };
  }

  return {
    hasLength: password.length >= MIN_PASSWORD_LENGTH,
    hasUppercase: hasUppercase(password),
    hasDigit: hasDigit(password),
  };
};
