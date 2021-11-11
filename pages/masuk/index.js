import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Login'));

export default function Masuk() {
  return <MainView />;
}