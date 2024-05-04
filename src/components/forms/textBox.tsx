'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useField } from 'formik';

export default function SingleTextBox({
  required = false,
  label,
  labelClass,
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
}: {
  required?: boolean;
  label?: string;
  labelClass?: string;
  type?: 'email' | 'text' | 'url' | 'password';
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}) {
  const properies = { type, name, placeholder, className };
  const [field, meta] = useField(properies);
  const identifier = `${name}ID`;
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col flex-wrap gap-1">
      <label
        className={twMerge('font-semibold capitalize ', labelClass)}
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        {...field}
        {...properies}
        id={identifier}
        aria-placeholder={placeholder}
        // type={type}
        // name={field.name}
        // value={field.value}
        // onChange={field.onChange}
        // placeholder={placeholder}
        className={twMerge(
          'h-[40px] rounded-[4px] bg-zinc-50 px-2 py-3 text-sm outline outline-1 outline-slate-300 transition-colors duration-500 ease-in-out invalid:bg-red-100 invalid:outline-red-600 invalid:placeholder:text-red-500 focus-within:outline-[#1ca7ec] focus:outline-none focus:outline-[#1ca7ec] active:outline-[#1ca7ec] ',
          className
        )}
      />
      {meta.touched && meta.error ? (
        <span className={`mt-1 text-xs font-light text-red-600`}>
          Please enter a valid {label?.toLowerCase()} input.
        </span>
      ) : null}
    </div>
  );
}
