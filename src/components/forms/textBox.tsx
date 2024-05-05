'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import button from '../ui/button';

export default function SingleTextBox({
  required = false,
  label,
  labelClass,
  type = 'text',
  name,
  value,
  placeholder,
  className,
  formik,
}: {
  required?: boolean;
  label?: string;
  labelClass?: string;
  type?: 'email' | 'text' | 'url' | 'password';
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  formik?: any;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const typeHandler = (type: string) => {
    if (type != 'password') return type;

    if (showPassword) return 'text';
    if (!showPassword) return 'password';

    console.log(showPassword);
  };

  const identifier = `${name}ID`;
  const error = formik.touched[`${name}`] && formik.errors[`${name}`];

  return (
    <div className=" relative flex flex-col flex-wrap gap-1">
      <label
        className={twMerge('font-semibold capitalize ', labelClass)}
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        type={typeHandler(type)}
        name={name}
        autoComplete="off"
        id={identifier}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={twMerge(
          ' h-[40px] rounded-[4px] bg-zinc-50 py-3 pl-2 pr-2 text-sm outline outline-1 outline-slate-300 transition-colors duration-500 ease-in-out invalid:bg-red-100 invalid:outline-red-600 invalid:placeholder:text-red-500 focus-within:outline-[#1ca7ec] focus:outline-none focus:outline-[#1ca7ec] active:outline-[#1ca7ec] ',
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

      {error && (
        <span className={`mt-1 text-xs font-light text-red-600 `}>
          Please enter a valid {label?.toLowerCase()} input.
        </span>
      )}
    </div>
  );
}
