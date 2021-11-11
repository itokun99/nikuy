import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, CenterDot } from './styles';

const Radio = ({ onPress, active }) => (
  <Wrapper onPress={onPress} active={active}>
    {active && <CenterDot />}
  </Wrapper>
);

Radio.propTypes = {
  onPress: PropTypes.func,
  active: PropTypes.bool
};
Radio.defaultProps = {
  onPress: null,
  active: false
};

export default memo(Radio);