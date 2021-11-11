import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { METRICS } from 'utils';
import Icon from '../Icon';
import { Wrapper } from './styles';

const Checkbox = ({
  size,
  color,
  inactiveColor,
  active,
  onPress
}) => {
  const [isChecked, setCheck] = useState(false);

  useEffect(() => {
    if (active) {
      setCheck(active);
    } else {
      setCheck(false);
    }
  }, [active]);

  const handlePress = () => {
    if (onPress) {
      onPress(!isChecked);
    }
    setCheck(!isChecked);
    return isChecked;
  };

  return (
    <Wrapper
      size={size}
      color={color}
      inactiveColor={inactiveColor}
      active={isChecked}
      onPress={handlePress}
    >
      {isChecked && (
        <Icon icon="ic-check-light" size={METRICS.getGutter(size) / 1.3} style={{ marginTop: 2 }} />
      )}
    </Wrapper>
  );
};

Checkbox.propTypes = {
  onPress: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  inactiveColor: PropTypes.string,
  active: PropTypes.bool
};
Checkbox.defaultProps = {
  size: 's',
  color: 'primary',
  inactiveColor: 'empty',
  active: false,
  onPress: null
};

export default memo(Checkbox);