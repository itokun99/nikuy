import { appActiveConfig } from '../appConfig';

// api endpoint list
const apiEndpoint = {
  // global / common endpoint
  url: '',

  // authentication
  login: `${appActiveConfig.api.baseUrl}/v1/login`,
  register: `${appActiveConfig.api.baseUrl}/v1/register`,
  logout: `${appActiveConfig.api.baseUrl}/v1/logout`,

  // profile
  profile: `${appActiveConfig.api.baseUrl}/v1/profile`
};

export { apiEndpoint };