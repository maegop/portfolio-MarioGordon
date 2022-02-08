import { ChakraProvider } from "@chakra-ui/react";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" href="/images/mem_happy.png" />
      </Head>
      {/* It makes the same SEO config for each page */}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
