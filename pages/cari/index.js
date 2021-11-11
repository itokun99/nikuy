import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Search'));

export default function Search() {
  return <MainView />;
}