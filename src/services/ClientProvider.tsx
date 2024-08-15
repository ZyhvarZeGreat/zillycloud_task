"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
const queryClient = new QueryClient();
const ClientProvider = ({ children }: PropsWithChildren) => {
  const client = useQueryClient(queryClient);
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ClientProvider;
