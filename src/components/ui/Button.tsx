import React from 'react';

interface ButtonProps {
  color?: 'blade' | 'vonCount' | 'dracula';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? 'dracula';
  return (
    <button
      onClick={props.onClick}
      className={`
      bg-gradient-to-r from-${color}-700 to-${color}-900
      text-white px-4 py-2 rounded-md
      hover:scale-110 ease-in-out duration-300
      ${props.className}
    `}
    >
      {props.children}
    </button>
  );
}
