'use client';
import { twMerge } from 'tailwind-merge';
import { IFileUpload } from '../types/interface';
import { FaFileUpload } from 'react-icons/fa';
import { useState } from 'react';

export default function FileUpload({
  label = 'Upload File',
  name,
  accept = '*',
  required = false,
  className,
  onChange,
  multiple = false,
}: IFileUpload) {
  const identifier = `${name}ID`;
  const [fileInput, setFileInput] = useState('');

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setFileInput(file.name);
    if (file) onChange(true);
  };

  return (
    <div className="group-input !editor-upload">
      <input
        multiple={multiple}
        required={required}
        className={twMerge(' ', className)}
        type="file"
        name={name}
        id={identifier}
        accept={accept}
        onChange={handleChange}
      />
      <span className="editor-upload-icon">
        <FaFileUpload />
      </span>
      {label && (
        <label htmlFor={identifier}>
          {fileInput !== '' ? fileInput : label}
        </label>
      )}
    </div>
  );
}
