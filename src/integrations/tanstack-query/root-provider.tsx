import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { JSX } from "react";

export const getContext = (): { queryClient: QueryClient } => {
  const queryClient = new QueryClient();
  return { queryClient };
};

type ProviderProps = {
  children: React.ReactNode;
  queryClient: QueryClient;
};
export const Provider = ({ children, queryClient }: ProviderProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
