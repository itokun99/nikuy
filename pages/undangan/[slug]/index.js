import dynamic from 'next/dynamic';
import { getInvitation } from 'services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'plyr/dist/plyr.css';

const MainView = dynamic(() => import('../../../src/views/InvitationDetail'));

export default function DetailInvitation({ invitation }) {
  return <MainView invitation={invitation} />;
}

export async function getServerSideProps(context) {
  try {
    const { slug } = context?.params;

    if (!slug) {
      throw new Error('require slug');
    }

    const data = await getInvitation(slug, context);
    if (!data) {
      throw new Error('data not found');
    }

    return {
      props: {
        invitation: data
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
}