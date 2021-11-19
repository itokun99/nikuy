import PropTypes from 'prop-types';
import { NavbarBack } from 'components';
import { Wrapper } from './styles';

function SecondContainer({
  children,
  navbarProps
}) {
  return (
    <>
      <NavbarBack {...navbarProps} />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

SecondContainer.propTypes = {
  children: PropTypes.node,
  navbarProps: PropTypes.object
};
SecondContainer.defaultProps = {
  children: null,
  navbarProps: {}
};

export default SecondContainer;