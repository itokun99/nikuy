import React, { useState, useEffect } from 'react';
import {
  GlobalStyle
} from 'components';
import PropTypes from 'prop-types';
import { store } from 'modules';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import { seoConfig } from 'configs';
import { CookiesProvider } from 'react-cookie';

const MyApp = ({ Component, pageProps }) => {
  // component state
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) {
      setReady(true);
    }
  }, [ready]);

  return (
    <CookiesProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nikuy - </title>
      </Head>
      <DefaultSeo {...seoConfig} />
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </CookiesProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
MyApp.defaultProps = {
  Component: null,
  pageProps: null
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);