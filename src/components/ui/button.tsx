'use client';

import { twMerge } from 'tailwind-merge';

export default function button({
  className,
  type = 'button',
  children,
  submitted,
  processing = 'Submitting',
  hasInput,
}: {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: any;
  submitted: boolean;
  processing?: string;
  hasInput: object;
}) {
  
  return (
    <button
      disabled={submitted}
      type={type}
      className={twMerge(
        `btn disabled:!bg-zinc-600 disabled:!text-zinc-200`,
        className
      )}
    >
      {submitted ? `${processing}...` : children}
    </button>
  );
}
