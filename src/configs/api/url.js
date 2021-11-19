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
  profile: `${appActiveConfig.api.baseUrl}/v1/profile`,

  // location
  provinces: `${appActiveConfig.api.baseUrl}/v1/location/provinces`,
  cities: `${appActiveConfig.api.baseUrl}/v1/location/cities`,
  districts: `${appActiveConfig.api.baseUrl}/v1/location/districts`,
  subdistricts: `${appActiveConfig.api.baseUrl}/v1/location/subdistricts`,

  // My Invitation
  myinvitation: `${appActiveConfig.api.baseUrl}/v1/myinvitation`,
  createMyInvitation: `${appActiveConfig.api.baseUrl}/v1/myinvitation/add`,
  editMyInvitation: `${appActiveConfig.api.baseUrl}/v1/myinvitation/edit`,
  deleteMyInvitation: `${appActiveConfig.api.baseUrl}/v1/myinvitation/delete`
};

export { apiEndpoint };