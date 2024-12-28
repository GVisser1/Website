"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./themeProvider";
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default Providers;
