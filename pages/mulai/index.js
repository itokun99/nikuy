import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Auth'));

export default function Auth() {
  return <MainView />;
}