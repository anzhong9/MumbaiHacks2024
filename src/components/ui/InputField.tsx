import React, { useState, useEffect, InputHTMLAttributes, ChangeEvent } from 'react';
import { IconEye, IconEyeOff, IconX } from '@tabler/icons-react';

type CustomOnChangeType = (value: string) => void;

interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: CustomOnChangeType | React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  icon?: React.ReactNode | string;
  iconAlignment?: 'left' | 'right';
  explanation?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className = '',
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  width,
  icon,
  iconAlignment = 'right',
  explanation,
  type,
  ...props
}) => {
  const [value, setValue] = useState(props.value as string || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value as string);
    }
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      if (typeof onChange === 'function') {
        if (onChange.length > 0) {
          (onChange as CustomOnChangeType)(newValue);
        } else {
          (onChange as React.ChangeEventHandler<HTMLInputElement>)(e);
        }
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearInput = () => {
    setValue('');
    if (onChange) {
      if (typeof onChange === 'function') {
        if (onChange.length > 0) {
          (onChange as CustomOnChangeType)('');
        } else {
          const event = { target: { value: '' } } as ChangeEvent<HTMLInputElement>;
          (onChange as React.ChangeEventHandler<HTMLInputElement>)(event);
        }
      }
    }
  };  

  const inputClasses = `
    peer w-full bg-white border rounded-md px-3 py-[11px] outline-none transition-all
    ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'border-gray-300'}
    ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}
    ${(icon || type === 'password' || value) ? 'pr-10' : ''}
    ${type === 'number' ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' : ''}

  `;

  const labelClasses = `
    absolute left-3 transition-all pointer-events-none
    ${(isFocused || value) ? '-top-2 text-xs text-blue-400 bg-white px-1' : 'top-3 text-gray-400'}
    ${error ? 'text-red-500' : ''}
    ${disabled ? 'text-gray-300' : ''}

  `;

  const renderIcon = () => {
    if (type === 'password') {
      return (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? <IconEyeOff /> : <IconEye />}
        </button>
      );
    } else if (icon) {
      const iconClasses = `absolute top-[10px] min-h-11 transform  ${iconAlignment === 'left' ? '-left-6' : 'right-3'
        }`;
      return (
        <span className={iconClasses}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="input icon" className="w-5 h-5" />
          ) : (
            React.cloneElement(icon as React.ReactElement, { size: 20 })
          )}
        </span>
      );
    } else if (value && !disabled) {
      return (
        <button
          type="button"
          onClick={clearInput}
          className="absolute top-[12px] right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        >
          <IconX size={16} />
        </button>
      );
    }
    return null;
  };

  return (
    <div className={`relative  ${width || 'w-full'} ${className}`}>
      <input
        {...props}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        className={inputClasses}
      />
      <label className={labelClasses}>{label}</label>
      {renderIcon()}
      {explanation && !error && (
        <p className="mt-1 text-xs text-gray-500">{explanation}</p>
      )}
      {error && errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;