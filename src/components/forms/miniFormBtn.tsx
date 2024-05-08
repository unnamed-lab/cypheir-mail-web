import React, { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

export default function MiniFormBtn({
  onClick,
  children,
  className,
  customStyle,
}: {
  onClick?: any;
  children: any;
  className?: string;
  customStyle?: CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge('form-key-btn', className)}
      style={customStyle}
    >
      {children}
    </button>
  );
}
