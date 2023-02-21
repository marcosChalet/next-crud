import React from 'react';

interface InputProps {
  type?: 'text' | 'number';
  text: string;
  value: string | number;
  className?: string;
  readOnly?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hasChangedValue?: any;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readOnly}
        onChange={(e) => props.hasChangedValue?.(e.target.value)}
        className={`
          border border-dracula-300 rounded-lg
          focus:outline-none bg-nosferatu-800 px-4 py-2
          ${props.readOnly ? 'hover:cursor-not-allowed' : 'focus:bg-nosferatu'}
        `}
      />
    </div>
  );
}
