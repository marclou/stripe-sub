import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}
    </SessionProvider>
  );
}
