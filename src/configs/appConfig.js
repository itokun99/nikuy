/**
 * app initial info
 */
const appInfo = {
  name: 'Grocery',
  versionName: '1.0.9 (77)',
  versionCode: 77,
  author: 'Kabayan Coding',
  development: true,
  webAppUrl: 'grocery.kabayancoding.com',
  posAppUrl: 'pos-grocery.kabayancoding.com'
};

const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: appInfo.webAppUrl,
    site_name: appInfo.name
  }
  // twitter:{
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // }
};

/**
 * app initial environment
 */
const appEnvironment = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  },
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_CONFIG_API_KEY,
      authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_CONFIG_DATABASE_URL,
      projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
      storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_CONFIG_APP_ID
    }
  }
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment;

export {
  appInfo, appEnvironment, appActiveConfig, seoConfig
};