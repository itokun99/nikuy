import { memo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { routePaths } from 'routes';
import {
  Title,
  Wrapper,
  Container,
  BackIcon,
  BackIconWrapper
} from './styles';

function NavbarBack({ title, transparent, color }) {
  const router = useRouter();
  const isHome = router.pathname === routePaths.HOME;

  const onPressBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <Container transparent={transparent} color={color}>
        <BackIconWrapper onPress={onPressBack}>
          <BackIcon />
        </BackIconWrapper>
        <Title large={isHome}>{title}</Title>
      </Container>
    </Wrapper>
  );
}

NavbarBack.propTypes = {
  title: PropTypes.string,
  transparent: PropTypes.bool,
  color: PropTypes.string
};
NavbarBack.defaultProps = {
  title: '',
  color: 'light',
  transparent: true
};

export default memo(NavbarBack);