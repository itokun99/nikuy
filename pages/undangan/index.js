import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/InvitationList'));

export default function InvitationList() {
  return <MainView />;
}