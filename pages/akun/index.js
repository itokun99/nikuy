import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Account'));

export default function Account() {
  return <MainView />;
}