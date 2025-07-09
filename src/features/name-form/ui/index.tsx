import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore } from '@/entities/user';

import { Button, Form, FormInput } from '@/shared';

import { NEXT_STEP } from '../model/consts';
import { type TNameFormSchema, nameUserSchema } from '../model/schemas';

export const NameForm = () => {
  const navigate = useNavigate();
  const registerData = useUserStore((state) => state.registerData);
  const setRegisterData = useUserStore((state) => state.setRegisterData);

  const form = useForm({
    resolver: zodResolver(nameUserSchema),
    defaultValues: { name: registerData?.name || '' },
  });

  const { handleSubmit } = form;
  const onSubmit = (formValues: TNameFormSchema) => {
    setRegisterData({ name: formValues.name });
    navigate(NEXT_STEP, { replace: true, relative: 'path' });
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
        <Button type="submit" className="w-full max-w-[340px]">
          Продолжить
        </Button>
      </form>
    </Form>
  );
};
