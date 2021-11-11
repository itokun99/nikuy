import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Auth'));

export default function Search() {
  return <MainView />;
}