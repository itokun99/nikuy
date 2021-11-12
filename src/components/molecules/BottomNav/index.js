import { memo } from 'react';
import { routePaths } from 'routes';
import { useRouter } from 'next/router';
import { getAuthDataFromCookie } from 'utils';
import {
  Nav,
  Content,
  NavIcon,
  Wrapper,
  Container
} from './styles';

const navs = [
  {
    icon: {
      active: 'ic-home-light',
      nonactive: 'ic-home'
    },
    path: routePaths.HOME
  },
  {
    icon: {
      active: 'ic-search-light',
      nonactive: 'ic-search'
    },
    path: routePaths.SEARCH
  },
  {
    icon: {
      active: 'ic-list-light',
      nonactive: 'ic-list'
    },
    path: routePaths.LIST_INVITATION
  },
  {
    icon: {
      active: 'ic-user-light',
      nonactive: 'ic-user'
    },
    path: routePaths.ACCOUNT
  }
];

function BottomNav() {
  const router = useRouter();

  const isAuthenticated = getAuthDataFromCookie();

  const navigate = path => {
    const authPath = [
      routePaths.ACCOUNT,
      routePaths.LIST_INVITATION
    ];
    if (authPath.includes(path) && !isAuthenticated) {
      return router.push(routePaths.AUTH);
    }
    return router.push(path);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          {navs.map((nav, index) => {
            const active = router.pathname === nav.path;
            return (
              <Nav active={active} key={Number(index)} onPress={() => navigate(nav.path)}>
                <NavIcon icon={active ? nav.icon.active : nav.icon.nonactive} />
              </Nav>
            );
          })}
        </Content>
      </Container>
    </Wrapper>
  );
}

export default memo(BottomNav);