import { Eye } from 'lucide-react';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from './button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

type PasswordInputProps = {
  name: string;
  labelName: string;
  placeholder?: string;
  isFormMessageVisible?: boolean;
};

export const PasswordInput = ({
  name,
  labelName,
  placeholder,
  isFormMessageVisible = true,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { control } = useFormContext();

  const toggleVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col gap-2">
          <FormItem>
            <FormLabel className="max-[425px]:text-lg text-xl font-bold">{labelName}</FormLabel>
          </FormItem>
          <FormControl>
            <div className="relative">
              <Input
                className="pr-10"
                {...field}
                value={field.value ?? ''}
                type={!isPasswordVisible ? 'password' : 'text'}
                placeholder={placeholder}
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
          {isFormMessageVisible && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
