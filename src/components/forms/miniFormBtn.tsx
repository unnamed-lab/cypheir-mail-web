import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function MiniFormBtn({
  onClick,
  children,
  className,
}: {
  onClick?: any;
  children: any;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge('form-key-btn', className)}
    >
      {children}
    </button>
  );
}
