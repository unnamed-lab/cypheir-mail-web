'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import button from './button';

export default function SingleTextBox({
  required = false,
  label,
  labelClass,
  type = 'text',
  name,
  value,
  placeholder,
  className,
  setInput,
}: {
  required?: boolean;
  label?: string;
  labelClass?: string;
  type?: 'email' | 'text' | 'url' | 'password';
  name: string;
  value?: any;
  placeholder?: string;
  className?: string;
  setInput?: any;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const typeHandler = (type: string) => {
    if (type != 'password') return type;

    if (showPassword) return 'text';
    if (!showPassword) return 'password';

    console.log(showPassword);
  };

  const identifier = `${name}ID`;
  const [isInputValid, setisInputValid] = useState(true);
  // const [isValidType, setisValidType] = useState(true);

  return (
    <div className=" relative flex flex-col flex-wrap gap-1">
      <label
        className={twMerge('font-semibold capitalize ', labelClass)}
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        required={required}
        type={typeHandler(type)}
        name={name}
        autoComplete="off"
        id={identifier}
        value={value[name]}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        onChange={(e) => {
          const input = e.target.value;
          setInput((prev: any) => ({ ...prev, [name]: e.target.value }));
          setisInputValid(input !== '');
        }}
        className={twMerge(
          'form-input-text',
          `${className} ${type === 'password' ? 'pr-7' : ''}`
        )}
      />

      {type === 'password' && (
        <button
          className={twMerge(
            'absolute right-[0.5rem] top-[2.6rem] flex h-[12px] w-[12px] items-center justify-center rounded-lg bg-[#1ca7ec] opacity-50',
            `${showPassword ? 'opacity-95' : ''}`
          )}
          onClick={(e: any) => {
            e.preventDefault();
            setShowPassword((prev: boolean) => !prev);
          }}
        ></button>
      )}

      {!isInputValid && (
        <span className={`mt-1 text-xs font-light text-red-600 `}>
          Please enter a valid {label?.toLowerCase()} input.
        </span>
      )}
    </div>
  );
}
