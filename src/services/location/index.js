import { API } from 'configs';

export const getProvinces = async () => {
  const response = await API.provinces();

  if (!response.data) {
    throw response;
  }

  return response.data;
};

export const getCities = async province => {
  const request = {
    params: {
      province
    }
  };
  const response = await API.cities(request);

  if (!response.data) {
    throw response;
  }

  return response.data;
};

export const getDistricts = async city => {
  const request = {
    params: {
      city
    }
  };
  const response = await API.districts(request);

  if (!response.data) {
    throw response;
  }

  return response.data;
};

export const getSubdistricts = async district => {
  const request = {
    params: {
      district
    }
  };

  const response = await API.subdistricts(request);

  if (!response.data) {
    throw response;
  }

  return response.data;
};