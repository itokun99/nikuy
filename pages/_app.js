import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  GlobalStyle
} from 'components';
import PropTypes from 'prop-types';
import { store, setLogout } from 'modules';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import { seoConfig } from 'configs';
import { getProfile } from 'services';
import { CookiesProvider } from 'react-cookie';
import { getAuthDataFromCookie, removeAuthDataFromCookie } from 'utils';
import { screenLoading } from 'controls';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { routePaths } from 'routes';

const UtilsContainer = dynamic(() => import('../src/containers/UtilsContainer'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  // component state
  const router = useRouter();
  const [ready, setReady] = useState(false);

  const init = useCallback(() => {
    const authData = getAuthDataFromCookie();
    if (authData) {
      screenLoading(true);
      getProfile().then(() => {
        setTimeout(() => {
          screenLoading(false);
        }, 2000);
      }).catch(err => {
        toast.error(err?.message);
        removeAuthDataFromCookie();
        store.dispatch(setLogout());
        screenLoading(false);
        router.push(routePaths.HOME);
      });
    }
  }, []);

  useEffect(() => {
    if (!ready) {
      setReady(true);
      init();
    }
  }, [ready, init]);

  return (
    <CookiesProvider>
      <Head>
        <title>Nikuy - </title>
      </Head>
      <DefaultSeo {...seoConfig} />
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
        <UtilsContainer />
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