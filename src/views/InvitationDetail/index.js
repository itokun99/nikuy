import { useState, useEffect, useCallback } from 'react';
import { SecondContainer } from 'containers';
import Image from 'next/image';
import { Gap } from 'components';
import { NextSeo } from 'next-seo';
import SectionTop from './SectionTop';
import SectionCouples from './SectionCouples';
import SectionSchedules from './SectionSchedules';
import SectionLocation from './SectionLocation';
import SectionVideo from './SectionVideo';
import SectionGallery from './SectionGallery';
import SectionAudio from './SectionAudio';
import SectionCover from './SectionCover';

import SectionBottom from './SectionBottom';
import SectionAmplop from './SectionAmplop';
import SectionDisqus from './SectionDisqus';
import SectionProtocol from './SectionProtocol';

const InvitationDetail = ({ invitation }) => {
  console.log('invitation', invitation);

  const [showCover, setShowCover] = useState(true);
  const [play, setPlay] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);
  const [amplop, setAmplop] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 350) {
      setBottomModal(true);
    } else {
      setBottomModal(false);
    }
  }, []);

  const toggleAmplop = () => {
    setAmplop(v => !v);
  };

  const onClickMessage = () => {
    document.querySelector('#ucapan').scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
      <NextSeo
        {
        ...{
          title: invitation.title,
          description: invitation.description,
          openGraph: {
            title: invitation.title,
            description: invitation.description,
            images: [
              {
                url: invitation.image?.thumbnail,
                width: 480,
                height: 380,
                alt: 'Og Image Alt',
                type: 'image/jpeg'
              }
            ]
          }
        }}
      />
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
      <SectionProtocol />
      <SectionAudio audios={invitation.audios} play={play} onToggle={onTogglePlay} />
      <SectionCover show={showCover} onOpen={onOpenCover} cover={invitation.image?.cover} />
      <SectionBottom
        show={bottomModal}
        onPressAmplop={toggleAmplop}
        onPressMessage={onClickMessage}
      />
      <SectionAmplop
        show={amplop}
        onClose={toggleAmplop}
        rekening={invitation.rekening}
        ewallets={invitation.ewallets}
      />
      <SectionDisqus />
      <Gap height={300} />
    </SecondContainer>
  );
};

export default InvitationDetail;