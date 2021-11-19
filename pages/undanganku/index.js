import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/MyInvitation'));

export default function InvitationList() {
  return <MainView />;
}