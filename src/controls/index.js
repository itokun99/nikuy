import { store, setScreenLoading } from 'modules';

export const screenLoading = (visible = true, option = {}) => {
  store.dispatch(setScreenLoading({
    visible,
    ...option
  }));
};