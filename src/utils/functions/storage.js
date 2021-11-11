import Cookies from 'universal-cookie';
import { stringify, parseJson } from './jsonHelper';

/**
 * Custom handle untuk set Item localstorage
 * @param {*} key
 * @param {*} value
 */
export const setStorage = (key, value) => {
  const json = stringify(value);

  if (localStorage) {
    localStorage.setItem(key, stringify(value));
  }
  return json;
};

/**
 * Custom handle untuk getItem LocalStorage
 * @param {*} key
 */
export const getStorage = key => {
  if (localStorage) {
    const data = localStorage?.getItem(key);
    return parseJson(data);
  }

  return null;
};

/**
 * Custom handle untuk remove item di localstorage
 * @param {*} key
 */
export const removeStorage = key => {
  window?.localStorage.removeItem(key);
  return true;
};

/**
 * Custom handle untuk hapus semua data di LocalStorage
 * @param {*} key
 */
export const removeAllStorage = () => {
  window?.localStorage.clear();
  return true;
};

/**
 * @name getAuthDataFromStorage
 * @description helper for get auth data
 */
export const getAuthDataFromStorage = () => {
  const data = getStorage('authData');
  return data;
};

/**
 * @name setAuthDataToStorage
 * @description helper for set auth data
 * @param {*} value
 */
export const setAuthDataToStorage = value => {
  const data = setStorage('authData', value);
  return data;
};

/**
 * @name removeAuthDataFromStorage
 * @description helper for remove auth data
 */
export const removeAuthDataFromStorage = () => {
  removeStorage('authData');
  return true;
};

export const setAuthDataToCookie = (token, ssrCookie) => {
  const cookies = ssrCookie ? new Cookies(ssrCookie) : new Cookies();
  cookies.set('groceryAuth', token);
  return token;
};

export const getAuthDataFromCookie = ssrCookie => {
  const cookies = ssrCookie ? new Cookies(ssrCookie) : new Cookies();
  const token = cookies.get('groceryAuth');
  return token;
};

export const removeAuthDataFromCookie = ssrCookie => {
  const cookies = ssrCookie ? new Cookies(ssrCookie) : new Cookies();
  cookies.remove('groceryAuth');
};