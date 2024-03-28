'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const client = new QueryClient();

export default function Component({ children }: PropsWithChildren<{}>) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}