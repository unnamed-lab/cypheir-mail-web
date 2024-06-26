'use client';

import { twMerge } from 'tailwind-merge';
import { IButton } from '../types/interface';

export default function button({
  className,
  type = 'button',
  children,
  submitted,
  processing = 'Submitting',
  hasInput,
  title,
}: IButton) {
  return (
    <button
      disabled={submitted || false}
      type={type}
      className={twMerge(
        `btn disabled:!bg-zinc-600 disabled:!text-zinc-200`,
        className
      )}
      title={title}
    >
      {submitted ? `${processing}...` : children}
    </button>
  );
}
