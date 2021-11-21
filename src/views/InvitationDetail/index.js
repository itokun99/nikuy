import { useState } from 'react';
import { SecondContainer } from 'containers';
import Image from 'next/image';
import { Gap } from 'components';
import SectionTop from './SectionTop';
import SectionCouples from './SectionCouples';
import SectionSchedules from './SectionSchedules';
import SectionLocation from './SectionLocation';
import SectionVideo from './SectionVideo';
import SectionGallery from './SectionGallery';
import SectionAudio from './SectionAudio';
import SectionCover from './SectionCover';

const InvitationDetail = ({ invitation }) => {
  console.log('invitation', invitation);

  const [showCover, setShowCover] = useState(true);
  const [play, setPlay] = useState(false);

  const onOpenCover = () => {
    setShowCover(false);
    setPlay(true);
  };

  const onTogglePlay = () => {
    setPlay(p => !p);
  };

  return (
    <SecondContainer
      padding={false}
      transparent={false}
      navbar={false}
      navbarProps={{
        title: '',
        transparent: true
      }}
    >
      <Image
        src={invitation.image?.thumbnail}
        width={480}
        height={380}
        layout="responsive"
        alt={invitation.title}
        placeholder="blur"
        blurDataURL="/assets/images/img-default.svg"
      />
      <Gap height="m" />
      <SectionTop
        title={invitation.title}
        location={invitation.location?.city?.name}
        description={invitation.description}
      />
      <SectionCouples couples={invitation.couples} />
      <SectionVideo videos={invitation.videos} />
      <SectionGallery galleries={invitation.galleries} />
      <SectionSchedules schedules={invitation.schedules} />
      <SectionLocation location={invitation.location} />
      <SectionAudio audios={invitation.audios} play={play} onToggle={onTogglePlay} />
      <SectionCover show={showCover} onOpen={onOpenCover} cover={invitation.image?.cover} />
    </SecondContainer>
  );
};

export default InvitationDetail;