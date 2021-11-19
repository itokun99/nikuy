import { API } from 'configs';
import { store, setMyInvitationList } from 'modules';

export const getMyInvitation = async () => {
  store.dispatch(setMyInvitationList({ loading: true }));
  const response = await API.myinvitation();
  if (!response || !response.data) {
    store.dispatch(setMyInvitationList({ loading: false, error: true }));
    throw response;
  }
  store.dispatch(setMyInvitationList({ loading: false, error: false, data: response.data }));
  return response.data;
};

export const getMyInvitationDetail = async id => {
  const request = {
    path: id
  };

  const response = await API.myinvitation(request);

  if (!response || !response.data) {
    throw response;
  }

  return response.data;
};

export const createMyInvitation = async form => {
  const request = {
    type: 'form-data',
    body: form
  };

  const response = await API.createMyInvitation(request);

  if (!response) {
    throw response;
  }

  return response;
};

export const editMyInvitation = async (id, form) => {
  const request = {
    path: id,
    type: 'form-data',
    body: form
  };

  const response = await API.editMyInvitation(request);

  if (!response) {
    throw response;
  }

  return response;
};

export const deleteMyInvitation = async id => {
  const request = {
    path: id
  };

  const response = await API.deleteMyInvitation(request);

  if (!response) {
    throw response;
  }

  return response;
};