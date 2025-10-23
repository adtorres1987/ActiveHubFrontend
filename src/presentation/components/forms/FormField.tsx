import React from 'react';
import { Input } from '../ui/Input';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  helperText?: string;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  errors,
  helperText,
  required = false,
}) => {
  const error = errors[name]?.message as string | undefined;

  return (
    <Input
      label={label}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      {...register(name, { required })}
    />
  );
};
