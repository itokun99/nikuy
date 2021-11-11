import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { THEMES } from 'utils';
import { LineElement } from './styles';

const Line = ({
  color, width, height, ...props
}) => (
  <LineElement
    color={color}
    width={width}
    height={height}
    {...props}
  />
);

Line.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Line.defaultProps = {
  color: THEMES.colors.empty,
  width: '100%',
  height: 1
};

export default memo(Line);