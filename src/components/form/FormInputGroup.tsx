import React, { RefObject } from 'react';

interface InputGroupProps {
  inputRef: RefObject<HTMLInputElement>;
  dataType: string;
  className?: string;
  autoComplete?: 'on' | 'off';
}

export default function FormInputGroup(props: InputGroupProps) {
  return (
    <div className="flex flex-col items-start w-full mb-16">
      <label
        htmlFor={props.dataType}
        className="inline-block py-1 cursor-text text-2xl font-bold"
      >
        {props.dataType}
      </label>
      <input
        required
        ref={props.inputRef}
        autoComplete={props.autoComplete ?? 'off'}
        id={props.dataType}
        type={props.dataType}
        className={`
          bg-inherit border-b-2 border-cullen-200 outline-none
          selection:bg-vonCount w-full h-10
          ${props.className}
        `}
      />
    </div>
  );
}
