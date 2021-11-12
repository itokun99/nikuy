import PropTypes from 'prop-types';
import React from 'react';
import { RNTouchableOpacity } from './styles';

const TouchableOpacity = ({ children, onPress, ...props }) => {
  const handleOnPress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress();
    }
  };

  return (
    <RNTouchableOpacity
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
  children: PropTypes.any,
  onPress: PropTypes.func
};
TouchableOpacity.defaultProps = {
  onPress: () => {},
  children: null

};

export default React.memo(TouchableOpacity);