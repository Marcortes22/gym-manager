'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
