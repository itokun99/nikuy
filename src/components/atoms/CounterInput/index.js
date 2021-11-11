import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ActionWrapper, ActionInput } from './styles';
import Text from '../Text';

const CounterInput = ({
  color,
  textColor,
  style,
  value,
  onBlurInput,
  onChangeInput,
  onChangeValue,
  onPressDecrease,
  onPressIncrease,
  numberOfValueChange
}) => {
  // variable
  const minValue = -numberOfValueChange;
  const plusValue = numberOfValueChange;

  /**
   * @name handlePressDecrease
   * @description handle untuk minus
   */
  const handlePressDecrease = () => {
    onPressDecrease(minValue);
    onChangeValue(minValue);
  };

  /**
   * @name handlePressIncrease
   * @description handle untuk plus
   */
  const handlePressIncrease = () => {
    onPressIncrease(plusValue);
    onChangeValue(plusValue);
  };

  return (
    <Wrapper style={style}>
      <ActionWrapper color={color} onPress={handlePressDecrease}>
        <Text color={textColor} size="m">
          -
        </Text>
      </ActionWrapper>
      <ActionInput
        onBlur={onBlurInput}
        onChangeText={onChangeInput}
        keyboardType="number-pad"
        {...(value !== null
          && typeof value !== 'undefined' && { value: `${value}` })}
      />
      <ActionWrapper color={color} onPress={handlePressIncrease}>
        <Text color={textColor} size="m">
          +
        </Text>
      </ActionWrapper>
    </Wrapper>
  );
};

CounterInput.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  style: PropTypes.any,
  value: PropTypes.number,
  onBlurInput: PropTypes.func,
  onChangeInput: PropTypes.func,
  onPressDecrease: PropTypes.func,
  onPressIncrease: PropTypes.func,
  onChangeValue: PropTypes.func,
  numberOfValueChange: PropTypes.number
};
CounterInput.defaultProps = {
  color: 'primary',
  textColor: 'light',
  value: null,
  style: null,
  numberOfValueChange: 1,
  onBlurInput: () => {},
  onChangeValue: e => e,
  onChangeInput: e => e,
  onPressIncrease: e => e,
  onPressDecrease: e => e
};

export default memo(CounterInput);