'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SingleTextBox({
  required = false,
  label,
  labelClass,
  type = 'text',
  name = '',
  value,
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
        type={type}
        name={name}
        id={identifier}
        // value={input}
        onChange={(e: any): void => setInput(e.target.value)}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        required={required}
        className={twMerge(
          'peer h-[40px] rounded-[4px] bg-zinc-50 px-2 py-3 text-sm outline outline-1 outline-slate-300 transition-colors duration-500 ease-in-out invalid:bg-red-100 invalid:outline-red-600 invalid:placeholder:text-red-500 focus-within:outline-[#1ca7ec] focus:outline-none focus:outline-[#1ca7ec] active:outline-[#1ca7ec] ',
          className
        )}
      />
      <span
        className={`mt-1 hidden text-xs font-light text-red-600  peer-invalid:flex`}
      >
        Please enter a valid {label?.toLowerCase()} input.
      </span>
    </div>
  );
}
