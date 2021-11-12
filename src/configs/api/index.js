import apiRequest from './config';
import { apiEndpoint } from './url';

const API = {};

// Global / common
API.getUrl = apiRequest.get(apiEndpoint.url);

// Authentication
API.login = apiRequest.post(apiEndpoint.login);
API.register = apiRequest.post(apiEndpoint.register);
API.profile = apiRequest.get(apiEndpoint.profile);

export default API;