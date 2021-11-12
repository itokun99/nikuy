import { ToastContainer } from 'react-toastify';
import { Loading } from 'components';
import { screenLoadingSelector } from 'modules';
import { useSelector, shallowEqual } from 'react-redux';

const UtilsContainer = () => {
  const loading = useSelector(screenLoadingSelector, shallowEqual);

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
    </>
  );
};

export default UtilsContainer;