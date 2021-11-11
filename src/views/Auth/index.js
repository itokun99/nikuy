import dynamic from 'next/dynamic';
import { BackgroundImage } from 'components';

const ModalAuth = dynamic(() => import('../../components/organisms/ModalAuth'), { ssr: false });

const Auth = () => (
  <>
    <BackgroundImage image="/assets/images/img-onboarding.svg" />
    <ModalAuth />
  </>
);

export default Auth;