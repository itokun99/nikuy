import { memo } from 'react';
import { Wrapper, Image } from './styles';

const GalleryItem = ({ image, onPress }) => (
  <Wrapper onPress={onPress}>
    <Image image={image} alt="" />
  </Wrapper>
);

export default memo(GalleryItem);