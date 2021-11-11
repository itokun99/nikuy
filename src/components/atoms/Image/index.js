import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { RNImage } from './styles';

const ImageView = ({
  source, alt, title, withImg, resizeMode, onPress, ...props
}) => {
  if (!source) {
    return null;
  }

  const getImageSource = () => {
    if (source && source.uri) {
      return source.uri;
    }

    return source;
  };

  if (withImg) {
    return (
      <Image
        src={getImageSource()}
        alt={alt}
        title={title}
        {...(typeof onPress === 'function' && { onClick: onPress })}
        {...props}
      />
    );
  }

  return (
    <RNImage src={source} onClick={onPress} resizeMode={resizeMode} {...(typeof onPress === 'function' && { onClick: onPress })} {...props} />
  );
};

ImageView.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  withImg: PropTypes.bool,
  resizeMode: PropTypes.string,
  children: PropTypes.any,
  source: PropTypes.any,
  onPress: PropTypes.func
};
ImageView.defaultProps = {
  resizeMode: null,
  alt: '',
  title: '',
  withImg: false,
  onPress: null,
  source: null,
  children: null
};

export default React.memo(ImageView);