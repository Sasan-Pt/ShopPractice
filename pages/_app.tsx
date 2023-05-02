import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "jotai";
import { SessionProvider, useSession } from "next-auth/react";
import Header from "../components/Header/Header";
import Ribbon from "../components/Header/Ribbon";
import MainFooter from "../components/Footer/mainFooter";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Ribbon />
            <Component {...pageProps} />
            <ReactQueryDevtools
              initialIsOpen={false}
              position={"bottom-right"}
            />
            <MainFooter />
          </QueryClientProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
