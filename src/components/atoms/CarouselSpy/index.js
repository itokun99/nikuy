import React from 'react';
import PropTypes from 'prop-types';
import { ActiveCarousel, InactiveCarousel } from './styles';

const CarouselSpy = ({ active }) => (active ? <ActiveCarousel /> : <InactiveCarousel />);

CarouselSpy.propTypes = {
  active: PropTypes.bool
};
CarouselSpy.defaultProps = {
  active: null
};

export default CarouselSpy;