import PropTypes from 'prop-types';
import React from 'react';
import Gap from '../Gap';
import Icon from '../Icon';

import {
  FakeInputField,
  FakePlaceholder,
  FakeValue, IconWrapper, InputField,
  InputWrapper
} from './styles';

// Input Component
const Input = ({
  type,
  icon,
  value,
  isFake,
  iconProps,
  withShadow,
  iconOnPress,
  onChangeText,
  defaultValue,
  radius,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  // merge to one props in input
  const inputProps = {
    ...props,
    ...(value && { value }),
    ...(defaultValue && { defaultValue }),
    ...(type === 'password' && { secureTextEntry: !showPassword })
  };

  /**
   * @name handlePressTogglePassword
   * @description for handle toggle press icon if it's password field
   */
  const handlePressTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  /**
   * @name renderIcon
   * @description for render icon in view
   */
  const renderIcon = () => {
    if (icon) {
      return (
        <IconWrapper onPress={iconOnPress}>
          <Gap height="xxxs" />
          <Icon icon={icon} size={20} {...iconProps} />
        </IconWrapper>
      );
    }

    if (type === 'password') {
      return (
        <IconWrapper onPress={handlePressTogglePassword}>
          <Icon icon={showPassword ? 'ic-eye' : 'ic-eye-disable'} size={24} {...iconProps} />
        </IconWrapper>
      );
    }

    return null;
  };

  // if its fake input
  if (isFake) {
    return (
      <InputWrapper radius={radius} withShadow={withShadow}>
        <FakeInputField
          isPassword={type === 'password'}
          withIcon={icon}
          {...inputProps}
        >
          {inputProps && inputProps.placeholder && !value ? (
            <FakePlaceholder>{inputProps.placeholder}</FakePlaceholder>
          ) : (
            <FakeValue>{value}</FakeValue>
          )}
        </FakeInputField>
        {renderIcon()}
      </InputWrapper>
    );
  }

  return (
    <InputWrapper radius={radius} withShadow={withShadow}>
      <InputField
        type={showPassword ? 'text' : type}
        allowFontScaling={false}
        onChangeText={onChangeText}
        isPassword={type === 'password'}
        isTextArea={type === 'textarea'}
        withIcon={icon}
        {...inputProps}
      />
      {renderIcon()}
    </InputWrapper>
  );
};

Input.propTypes = {
  isFake: PropTypes.bool,
  type: PropTypes.string,
  iconOnPress: PropTypes.func,
  iconProps: PropTypes.object,
  icon: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  withShadow: PropTypes.bool,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Input.defaultProps = {
  type: 'text',
  isFake: false,
  iconProps: null,
  onChangeText: () => {},
  value: '',
  iconOnPress: () => {},
  defaultValue: '',
  icon: null,
  withShadow: false,
  radius: 'input'
};

export default React.memo(Input);