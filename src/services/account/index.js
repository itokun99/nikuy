import { API } from 'configs';
import { store, setProfile } from 'modules';

export async function getProfile() {
  const response = await API.profile();

  if (!response || !response.data) {
    throw response;
  }
  store.dispatch(setProfile(response.data));
  return response.data;
}