import { Container, MenuList } from 'components';
import { MainContainer } from 'containers';
import { profileSelector } from 'modules';
import { useSelector, shallowEqual } from 'react-redux';
import { getAuthDataFromCookie } from 'utils';
import dynamic from 'next/dynamic';

const CardProfile = dynamic(() => import('../../components/molecules/CardProfile'), { ssr: false });
const CardSignIn = dynamic(() => import('../../components/molecules/CardSignIn'), { ssr: false });

const Account = () => {
  const profile = useSelector(profileSelector, shallowEqual);
  const isAuthenticated = Boolean(getAuthDataFromCookie());

  const renderProfileTop = () => {
    if (!isAuthenticated) {
      return (
        <CardSignIn />
      );
    }

    return (
      <CardProfile
        name={profile?.name}
        subname={profile?.email}
        image={profile?.photo}
      />
    );
  };

  return (
    <MainContainer
      navbarProps={{
        title: 'Akun'
      }}
    >
      <Container>
        {renderProfileTop()}
        <MenuList />
      </Container>
    </MainContainer>
  );
};

export default Account;