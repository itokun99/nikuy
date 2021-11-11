import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GapElement } from './styles';

const Gap = ({ width, height, ...props }) => (
  <GapElement
    width={width}
    height={height}
    {...props}
  />
);

Gap.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gap.defaultProps = {
  width: '100%',
  height: 's'
};

export default memo(Gap);