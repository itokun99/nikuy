import { ToastContainer } from 'react-toastify';
import { Loading, Alert } from 'components';
import { screenLoadingSelector, alertSelector } from 'modules';
import { useSelector, shallowEqual } from 'react-redux';

const UtilsContainer = () => {
  const loading = useSelector(screenLoadingSelector, shallowEqual);
  const alertConfig = useSelector(alertSelector, shallowEqual);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Loading {...loading} />
      <Alert {...alertConfig} />
    </>
  );
};

export default UtilsContainer;