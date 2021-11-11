import { memo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { routePaths } from 'routes';
import {
  Title,
  Wrapper,
  Container,
  NotifIcon,
  NotifBadge,
  NotifWrapper
} from './styles';

function Navbar({ title }) {
  const router = useRouter();
  const isHome = router.pathname === routePaths.HOME;

  return (
    <Wrapper>
      <Container>
        <Title large={isHome}>{title}</Title>
        <NotifWrapper>
          <NotifIcon />
          <NotifBadge />
        </NotifWrapper>
      </Container>
    </Wrapper>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.defaultProps = {
  title: ''
};

export default memo(Navbar);