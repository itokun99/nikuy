/**
 * app initial info
 */
const appInfo = {
  name: 'Halonikah',
  versionName: '1.0.0',
  versionCode: 1,
  author: 'Indrawan Lisanto',
  development: true,
  webAppUrl: '',
  posAppUrl: ''
};

const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: appInfo.webAppUrl,
    site_name: appInfo.name
  }
};

/**
 * app initial environment
 */
const appEnvironment = {
  api: {
    baseUrl: 'http://0.0.0.0:8000/api'
  }
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment;

export {
  appInfo, appEnvironment, appActiveConfig, seoConfig
};