import dynamic from 'next/dynamic';

const MainView = dynamic(() => import('../../src/views/Register'));

export default function Register() {
  return <MainView />;
}