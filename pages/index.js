import dynamic from 'next/dynamic';

const HomeView = dynamic(() => import('../src/views/Home'));

export default function Home() {
  return <HomeView />;
}