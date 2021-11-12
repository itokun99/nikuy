import PropTypes from 'prop-types';
import { Navbar, BottomNav } from 'components';
import { Wrapper } from './styles';

function MainContainer({
  children,
  navbarProps
}) {
  return (
    <>
      <Navbar {...navbarProps} />
      <Wrapper>
        {children}
      </Wrapper>
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