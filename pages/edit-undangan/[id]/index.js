import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../../src/views/CreateInvitation'));

export default function CreateInvitation() {
  return <MainView />;
}