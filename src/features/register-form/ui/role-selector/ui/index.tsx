import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Label,
  RadioGroup,
  RadioGroupItem,
  RoleIconLight,
  RoleIconSelected,
  cn,
} from '@/shared';

import { allowedRoles } from '../../../model/consts';

export const RoleSelector = () => {
  const { control } = useFormContext();

  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleClick = (role: string) => setSelectedRole(role);

  return (
    <FormField
      control={control}
      name="role"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-4 max-w-[340px]">
          <FormLabel className="text-xl font-bold">Ваша роль</FormLabel>
          <FormControl>
            <RadioGroup
              defaultValue={field.value}
              onValueChange={field.onChange}
              className="flex justify-start gap-2 flex-wrap"
            >
              {allowedRoles.map((role) => (
                <div
                  key={role}
                  className="flex flex-col gap-0 w-full max-[480px]:max-w-[128px] max-w-[152px] max-h-[141px]"
                >
                  <RadioGroupItem value={role} id={role} className="peer sr-only" />
                  <Label
                    htmlFor={role}
                    onClick={() => handleRoleClick(role)}
                    className={cn(
                      'flex flex-col gap-0 max-[480px]:p-3 p-6 transition-all duration-100',
                      'bg-secondary text-secondary-foreground border-2 border-solid rounded-[10px]',
                      selectedRole === role
                        ? 'border-border-active bg-input-primary'
                        : 'border-border',
                    )}
                  >
                    <img
                      src={selectedRole === role ? RoleIconSelected : RoleIconLight}
                      alt={role}
                      className="max-w-[75px]"
                    />
                    <p
                      className={cn(
                        'text-sm font-normal',
                        selectedRole === role ? 'text-border-active' : '',
                      )}
                    >
                      {role}
                    </p>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
