import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Web3Provider from "../components/WagmiProvider/WagmiProviderContext";
import { GlobalStyle } from "../styled";
import { Spin } from "../components/atoms/Spin";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Spin isLoading />}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Web3Provider>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
              style: {
                wordBreak: "break-all",
              },
            }}
          />
          <Component {...pageProps} />
        </Web3Provider>
      </QueryClientProvider>
    </Suspense>
  );
}
