import React from 'react';
import Title from '../title/Title';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
        flex flex-col text-cullen rounded-md
        bg-aro selection:bg-dracula-600
        w-full max-w-4xl sm:w-[90%]
      `}
    >
      <Title>{'Simple CRUD'}</Title>
      {props.children}
    </div>
  );
}
