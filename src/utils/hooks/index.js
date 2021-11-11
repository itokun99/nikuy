import { useState } from 'react';

/**
 * Custom hook untuk handle state berupa formulir yang berubah
 * @param {*} initialState
 */
export const useForm = initialState => {
  const [state, setState] = useState(initialState);

  const onChangeState = (value, field) => {
    if (field === 'reset') {
      return setState(initialState);
    }

    if (field === 'multiple') {
      return setState(prevState => ({
        ...prevState,
        ...value
      }));
    }

    return setState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return [state, onChangeState];
};