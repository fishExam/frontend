import { MIN_PASSWORD_LENGTH } from '../model/consts';
import { type TUserRegisterData, passwordSchema } from '../model/schemas';
import type { TRegisterField, TValidRegisterFields } from '../model/types';
import { stepRequirements } from './../model/consts';

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

export const computeIsValid = (data?: Partial<TUserRegisterData>): TValidRegisterFields => ({
  name: !!data?.name,
  username: !!data?.username,
  password: !!data?.password,
  role: !!data?.role,
});

export const getTargetStep = (
  currentStep: TRegisterField,
  isValid: TValidRegisterFields,
): TRegisterField => {
  const steps = Object.keys(stepRequirements) as TRegisterField[];
  const currentIndex = steps.indexOf(currentStep);

  for (let i = 0; i <= currentIndex; i++) {
    if (!isValid[steps[i]]) {
      return steps[i];
    }
  }

  return currentStep;
};
