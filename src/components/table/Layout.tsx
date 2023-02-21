import React from 'react';
import Title from '../title/Title';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 text-cullen rounded-md relative bg-aro selection:bg-dracula-600 max-w-4xl">
      <Title>{'Simple CRUD'}</Title>
      <div className="p-6">{props.children}</div>
    </div>
  );
}
