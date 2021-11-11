import { memo } from 'react';
import Image from 'next/image';
import { ImageWrapper } from './styles';

const BackgroundImage = ({ image }) => (
  <>
    <ImageWrapper>
      <Image src={image} alt="" width="375" height="812" layout="responsive" />
    </ImageWrapper>
  </>
);

export default memo(BackgroundImage);