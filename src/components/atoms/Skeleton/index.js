import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { METRICS } from 'utils';
import Shimmer from '../Shimmer';
import { Content } from './styles';

const Skeleton = ({
  shimmerProps,
  rounded,
  width,
  height,
  radius,
  ...props
}) => {
  const contentWidth = width;
  let contentHeight = height;

  if (rounded) {
    contentHeight = contentWidth;
  }

  return (
    <Content
      width={contentWidth}
      height={contentHeight}
      radius={radius}
      rounded={rounded}
      {...props}
    >
      <Shimmer borderRadius={rounded ? contentWidth : radius} />
    </Content>
  );
};

Skeleton.propTypes = {
  shimmerProps: PropTypes.object,
  rounded: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Skeleton.defaultProps = {
  width: '100%',
  height: 24,
  radius: METRICS.radius.button,
  rounded: false,
  shimmerProps: null
};

export default memo(Skeleton);