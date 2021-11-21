import { API } from 'configs';
import { store, setInvitations } from 'modules';

export const getInvitations = async () => {
  store.dispatch(setInvitations({ loading: true }));
  const response = await API.invitations();
  if (!response || !response.data) {
    store.dispatch(setInvitations({ loading: false, error: true }));
    throw response;
  }
  store.dispatch(setInvitations({ loading: false, error: false, data: response.data }));
  return response.data;
};

export const getInvitation = async (id, context) => {
  const request = {
    path: id,
    context
  };

  const response = await API.invitations(request);

  if (!response || !response.data) {
    throw response;
  }

  return response.data;
};