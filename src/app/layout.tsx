// app/layout.tsx
"use client";

import { ReactNode } from "react";
import { Providers } from "./providers/Providers";
import { ProductProvider } from "./providers/ProductProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <Providers>
            <ProductProvider>{children}</ProductProvider>
          </Providers>
        </body>
      </html>
    </QueryClientProvider>
  );
}
