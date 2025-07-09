import type { TRegisterField } from './types';

export const MIN_PASSWORD_LENGTH = 8;

export const steps: TRegisterField[] = ['name', 'username', 'password', 'role'];
export const stepRequirements = steps.reduce(
  (acc, step, index) => {
    if (index === 0) {
      return { ...acc, [step]: '' };
    }
    return { ...acc, [step]: steps[index - 1] };
  },
  {} as Record<TRegisterField, string>,
);
