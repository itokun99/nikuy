import axios from 'axios';
import { resolveBackendValidationError, getAuthDataFromCookie } from 'utils';

/**
 * @name apiInstance
 * @description API instance dari axios untuk default config
 */
const apiInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  validateStatus: status => status >= 200 && status < 300
});

/**
 * @name ApiRequest
 * @description Kelas untuk handle api request
 */
class ApiRequest {
  static get(route, token = false) {
    return payload => this.request('GET', route, payload, token);
  }

  static put(route, token = false) {
    return payload => this.request('PUT', route, payload, token);
  }

  static post(route, token = false) {
    return payload => this.request('POST', route, payload, token);
  }

  static delete(route, token = false) {
    return payload => this.request('DELETE', route, payload, token);
  }

  static patch(route, token = false) {
    return payload => this.request('PATCH', route, payload, token);
  }

  /**
   * @name resolveParams()
   * @param {*} params
   * @description untuk handle object params di konversi ke query params di url
   */
  static resolveParams(params) {
    const paramsResult = [];
    Object.keys(params).map(e => paramsResult.push(`${e}=${params[e]}`));
    return paramsResult.join('&');
  }

  /**
   * @name request
   * @param {*} method
   * @param {*} route
   * @param {*} payload
   * @param {*} token
   * @description Method untuk handling call api
   */
  static async request(method, route, payload = {}, token = false) {
    const path = payload.path ? `/${payload.path}` : '';
    const params = payload.params
      ? `?${this.resolveParams(payload.params)}`
      : '';
    const customUrl = payload.url ? payload.url : '';
    const baseHeaders = {
      'Content-Type':
        payload.type === 'form-data'
          ? 'multipart/form-data'
          : 'application/json'
    };

    if (token) {
      const authCookie = getAuthDataFromCookie();
      if (authCookie) {
        baseHeaders.Authorization = `Bearer ${authCookie}`;
      }

      // ssr context
      if (payload?.context) {
        const cookie = payload?.context?.req?.headers?.cookie;
        if (cookie) {
          const authSsrCookie = getAuthDataFromCookie(cookie);
          if (authSsrCookie) {
            baseHeaders.Authorization = `Bearer ${authSsrCookie}`;
          }
        }
      }
    }

    const requestPayload = {
      url: customUrl.length > 0 ? customUrl : route + path + params,
      method,
      headers: payload.headers
        ? { ...baseHeaders, ...payload.headers }
        : baseHeaders,
      data: payload.body ? payload.body : {}
    };

    try {
      console.log(
        'API-REQUEST:',
        requestPayload.url,
        JSON.stringify(requestPayload)
        // requestPayload
      );

      const response = await apiInstance.request(requestPayload);

      // karena pakai axios response asli ada di data
      if (response.data) {
        console.log(
          'API-RESPONSE:',
          requestPayload.url,
          JSON.stringify(response.data)
          // response.data
        );
        return response.data;
      }

      console.log(
        'API-RESPONSE:',
        requestPayload.url,
        JSON.stringify(response)
        // response
      );
      return response;
    } catch (err) {
      if (err && err.response && err.response.data) {
        console.log(
          'API-RESPONSE:',
          requestPayload.url,
          JSON.stringify(err.response.data)
          // err.response.data
        );
        const errorData = resolveBackendValidationError(err.response.data);
        throw errorData;
      } else if (err && err.response) {
        console.log(
          'API-RESPONSE:',
          requestPayload.url,
          JSON.stringify(err.response)
          // err.response
        );
        throw err.response;
      } else {
        console.log(
          'API-RESPONSE:',
          requestPayload.url,
          JSON.stringify(err)
          // err
        );
      }
      throw err;
    }
  }
}

export default ApiRequest;