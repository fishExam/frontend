import { Eye } from 'lucide-react';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from './button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

type PasswordInputProps = {
  name: string;
  labelName: string;
};

export const PasswordInput = ({ name, labelName }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { control } = useFormContext();

  const toggleVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormItem>
            <FormLabel>{labelName}</FormLabel>
          </FormItem>
          <FormControl>
            <div className="relative">
              <Input
                className="pr-10"
                {...field}
                value={field.value ?? ''}
                type={!isPasswordVisible ? 'password' : 'text'}
                aria-invalid={!!fieldState.error}
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full size-7"
                onClick={toggleVisibility}
              >
                <Eye className="size-4" />
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
