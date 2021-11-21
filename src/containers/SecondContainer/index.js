import PropTypes from 'prop-types';
import { NavbarBack } from 'components';
import { Wrapper } from './styles';

function SecondContainer({
  children,
  navbarProps,
  transparent,
  padding,
  navbar
}) {
  return (
    <>
      {navbar && <NavbarBack {...navbarProps} />}
      <Wrapper transparent={transparent} padding={padding}>
        {children}
      </Wrapper>
    </>
  );
}

SecondContainer.propTypes = {
  navbar: PropTypes.bool,
  children: PropTypes.node,
  navbarProps: PropTypes.object,
  transparent: PropTypes.bool,
  padding: PropTypes.bool
};
SecondContainer.defaultProps = {
  navbar: true,
  children: null,
  navbarProps: {},
  transparent: true,
  padding: true
};

export default SecondContainer;