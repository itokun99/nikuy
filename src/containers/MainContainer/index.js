import PropTypes from 'prop-types';
import { Navbar, BottomNav } from 'components';

function MainContainer({
  children,
  navbarProps
}) {
  return (
    <>
      <Navbar {...navbarProps} />
      {children}
      <BottomNav />
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node,
  navbarProps: PropTypes.object
};
MainContainer.defaultProps = {
  children: null,
  navbarProps: {}
};

export default MainContainer;