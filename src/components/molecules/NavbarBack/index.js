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

function NavbarBack({ title }) {
  const router = useRouter();
  const isHome = router.pathname === routePaths.HOME;

  const onPressBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <Container>
        <BackIconWrapper onPress={onPressBack}>
          <BackIcon />
        </BackIconWrapper>
        <Title large={isHome}>{title}</Title>
      </Container>
    </Wrapper>
  );
}

NavbarBack.propTypes = {
  title: PropTypes.string
};
NavbarBack.defaultProps = {
  title: ''
};

export default memo(NavbarBack);