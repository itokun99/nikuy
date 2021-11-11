import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Profile'));

export default function Profile() {
  return <MainView />;
}