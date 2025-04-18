"use client";

import type { ReactNode, JSX } from "react";
import { ThemeProvider } from "./themeProvider";
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalSearchProvider } from "./globalSearchProvider";

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
          <GlobalSearchProvider>{children}</GlobalSearchProvider>
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default Providers;
