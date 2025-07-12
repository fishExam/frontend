import { CircleCheck, XCircle } from 'lucide-react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore, validatePassword } from '@/entities/user';

import { Button, Form, PasswordInput, cn } from '@/shared';

import { NEXT_STEP, PREV_STEP, validationMessages } from '../model/consts';
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

  const validationRules = isSubmitted
    ? validatePassword(password)
    : { hasLength: true, hasUppercase: true, hasDigit: true };

  const validationValues = Object.values(validationRules);

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
            {validationMessages.map((message, index) => (
              <li key={message} className="flex items-center gap-1">
                {!isSubmitted ? (
                  <XCircle className="stroke-1 size-[15px] fill-icon-muted text-card scale-120" />
                ) : validationValues[index] ? (
                  <CircleCheck className="stroke-1 size-[15px] fill-positive text-card scale-120" />
                ) : (
                  <XCircle className="stroke-1 size-[15px] fill-destructive text-card scale-120" />
                )}
                <p
                  className={cn(
                    'text-sm',
                    validationValues[index] ? 'text-muted-foreground' : 'text-destructive',
                  )}
                >
                  {message}
                </p>
              </li>
            ))}
          </ul>
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
