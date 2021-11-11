import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Bullet, Wrapper } from './styles';

const Switch = ({ onPress, onChange, active }) => {
  const handlePress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress();
    }

    if (onChange && typeof onChange === 'function') {
      onChange();
    }
  };

  return (
    <Wrapper status={active} onPress={handlePress}>
      <Bullet status={active} />
    </Wrapper>
  );
};

Switch.propTypes = {
  onPress: PropTypes.func,
  onChange: PropTypes.func,
  active: PropTypes.bool
};
Switch.defaultProps = {
  onPress: null,
  onChange: null,
  active: false
};

export default memo(Switch);