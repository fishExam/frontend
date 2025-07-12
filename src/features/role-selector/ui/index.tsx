import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { RoleCard, useUserStore } from '@/entities/user';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
} from '@/shared';

import { PREV_STEP, allowedRoles } from '../model/consts';
import { type TRoleUserSchema, roleUserSchema } from '../model/schemas';
import type { TRoleSelector } from '../model/types';

export const RoleSelector = () => {
  const navigate = useNavigate();
  const registerData = useUserStore((state) => state.registerData);
  const setRegisterData = useUserStore((state) => state.setRegisterData);

  const form = useForm({
    resolver: zodResolver(roleUserSchema),
    defaultValues: { role: registerData?.role as TRoleSelector },
  });

  const { handleSubmit, control } = form;

  const onPrev = () => navigate(PREV_STEP, { replace: true, relative: 'path' });
  const onSubmit = (formValues: TRoleUserSchema) => {
    setRegisterData({ role: formValues.role });

    const allUserData = useUserStore.getState().registerData;
    console.log('Final form values:', allUserData);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 w-full max-w-[340px]" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 max-w-[340px]">
              <FormLabel className="text-xl font-bold">Ваша роль</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value || ''}
                  onValueChange={field.onChange}
                  className="flex justify-start gap-2 flex-wrap"
                >
                  {allowedRoles.map((role) => (
                    <RoleCard key={role} role={role} currentRole={field.value} />
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
            Создать аккаунт
          </Button>
        </div>
      </form>
    </Form>
  );
};
