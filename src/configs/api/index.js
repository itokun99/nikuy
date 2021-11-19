import apiRequest from './config';
import { apiEndpoint } from './url';

const API = {};

// Global / common
API.getUrl = apiRequest.get(apiEndpoint.url);

// Authentication
API.login = apiRequest.post(apiEndpoint.login);
API.register = apiRequest.post(apiEndpoint.register);
API.logout = apiRequest.get(apiEndpoint.logout);

// Profile
API.profile = apiRequest.get(apiEndpoint.profile);

// Location
API.provinces = apiRequest.get(apiEndpoint.provinces);
API.cities = apiRequest.get(apiEndpoint.cities);
API.districts = apiRequest.get(apiEndpoint.districts);
API.subdistricts = apiRequest.get(apiEndpoint.subdistricts);

// MyInvitation
API.myinvitation = apiRequest.get(apiEndpoint.myinvitation);
API.createMyInvitation = apiRequest.post(apiEndpoint.createMyInvitation);
API.editMyInvitation = apiRequest.post(apiEndpoint.editMyInvitation);
API.deleteMyInvitation = apiRequest.delete(apiEndpoint.deleteMyInvitation);

export default API;