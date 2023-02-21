import React from 'react';
import RequireAuth from '@/backend/auth/RequireAuth';

export default function Home() {
  return <RequireAuth />;
}
