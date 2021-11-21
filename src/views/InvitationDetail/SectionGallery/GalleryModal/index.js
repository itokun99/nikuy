/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import { useState, useEffect, createRef } from 'react';
import Slider from 'react-slick';

import {
  Wrapper, SliderWrapper, ImageWrapper, CloseIcon, CloseButton
} from './styles';

const GalleryModal = ({
  galleries, current, onClose, show
}) => {
  const slider = createRef();

  const [index, setIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setIndex({ slideIndex: next })
  };

  useEffect(() => {
    setIndex(current);
    if (slider) {
      slider?.current.slickGoTo(current);
    }
  }, [current, slider]);

  return (
    <Wrapper index={index} show={show}>
      <CloseButton onPress={onClose}>
        <CloseIcon />
      </CloseButton>
      <SliderWrapper>
        <Slider ref={slider} {...settings}>
          {galleries.map(gallery => (
            <ImageWrapper key={gallery.id} image={gallery.url} />
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

GalleryModal.propTypes = {
  show: PropTypes.bool,
  galleries: PropTypes.array,
  current: PropTypes.number
};
GalleryModal.defaultProps = {
  show: false,
  galleries: [],
  current: 0
};

export default GalleryModal;