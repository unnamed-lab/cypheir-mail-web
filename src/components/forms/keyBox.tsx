'use client';
import { twMerge } from 'tailwind-merge';
import { FaCopy, FaEye, FaRegEye } from 'react-icons/fa';
import { useState } from 'react';
import { TKeyBoxType } from '../types/types';

export default function KeyBox({
  type = 'public',
  name,
  value,
  placeholder,
  className,
}: {
  type: TKeyBoxType;
  name: string;
  value: string | number;
  placeholder?: string;
  className?: string;
}) {
  const [input] = useState(value);
  const [showText, setShowText] = useState(false);
  const inputType = type === 'public' || showText ? 'text' : 'password';

  const handleCopy = () => {
    navigator.clipboard.writeText(String(input));
    alert(
      `${type === 'public' ? 'Public' : 'Secret'} key copied to clipboard 🤖👍`
    );
  };

  const handleShow = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-wrap gap-1 md:w-10/12 md:flex-nowrap">
      <input
        disabled
        className={twMerge(
          'form-input-text w-fit flex-grow text-xs tracking-widest text-zinc-600 md:w-9/12 md:flex-none md:grow-0',
          className
        )}
        type={(showText && 'text') || inputType}
        id={`${name}Id`}
        value={input}
        name={name}
        placeholder={placeholder}
        aria-placeholder={placeholder}
      />
      {type === 'private' && (
        <button type="button" onClick={handleShow} className="form-key-btn">
          {showText ? <FaRegEye /> : <FaEye />}
        </button>
      )}
      <button type="button" onClick={handleCopy} className="form-key-btn">
        <FaCopy />
      </button>
    </div>
  );
}
