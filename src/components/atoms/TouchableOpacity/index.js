import PropTypes from 'prop-types';
import React from 'react';
import { RNTouchableOpacity } from './styles';

const TouchableOpacity = ({
  children, type, onPress, ...props
}) => {
  const handleOnPress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress();
    }
  };

  return (
    <RNTouchableOpacity
      type={type}
      role="button"
      tabIndex={0}
      onClick={handleOnPress}
      {...props}
    >
      {children}
    </RNTouchableOpacity>
  );
};

TouchableOpacity.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.any,
  onPress: PropTypes.func
};
TouchableOpacity.defaultProps = {
  onPress: () => {},
  children: null,
  type: 'button'

};

export default React.memo(TouchableOpacity);