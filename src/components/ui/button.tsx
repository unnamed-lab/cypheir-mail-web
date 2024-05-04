'use client';

import { twMerge } from 'tailwind-merge';

export default function button({
  className,
  type = 'button',
  children,
}: {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: any;
}) {
  return (
    <button type={type} className={twMerge(`btn`, className)}>
      {children}
    </button>
  );
}
