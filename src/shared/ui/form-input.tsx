import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

type FormInputProps = {
  name: string;
  labelName: string;
  inputType?: string;
  placeholder?: string;
};

export const FormInput = ({ name, labelName, inputType, placeholder }: FormInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormItem>
            <FormLabel>{labelName}</FormLabel>
          </FormItem>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={inputType} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
