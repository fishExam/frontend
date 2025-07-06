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
        <FormItem className="flex flex-col gap-2">
          <FormItem>
            <FormLabel className="max-[425px]:text-lg text-xl font-bold">{labelName}</FormLabel>
          </FormItem>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={inputType} />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};
