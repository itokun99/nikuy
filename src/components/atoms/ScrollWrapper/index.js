import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const ScrollWrapper = ({ children, height }) => (
  <Wrapper
    height={height}
  >
    {children}
  </Wrapper>
);

ScrollWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
ScrollWrapper.defaultProps = {
  children: null,
  height: 'auto'
};

export default React.memo(ScrollWrapper);