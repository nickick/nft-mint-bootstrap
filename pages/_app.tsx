/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ContractContextProvider from '../src/ContractContext';
import Layout from '../src/Layout';
import theme from '../src/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta property="og:image" content="https://replaceme.xyz/og-image.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Replace me" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Replace me" />
        <meta property="og:title" content="Replace me" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <ContractContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContractContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
