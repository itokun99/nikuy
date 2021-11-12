import { API } from 'configs';
import { store, setLogout } from 'modules';
import { setAuthDataToCookie, removeAuthDataFromCookie } from 'utils';

export async function login({ email, password }) {
  const request = {
    body: { email, password }
  };

  const response = await API.login(request);

  if (!response || !response.data) {
    throw response;
  }

  setAuthDataToCookie(response.data?.token);
  return response.data;
}

export async function register(form) {
  const request = {
    body: form
  };

  const response = await API.register(request);

  if (!response) {
    throw response;
  }

  return response;
}

export async function logout() {
  const response = await API.logout();

  if (!response) {
    throw response;
  }
  store.dispatch(setLogout());
  removeAuthDataFromCookie();
  return response;
}