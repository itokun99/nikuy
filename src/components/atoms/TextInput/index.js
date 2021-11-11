import React from 'react';
import PropTypes from 'prop-types';
import { InputFake, InputField, TextArea } from './styles';

const TextInput = ({
  onChangeText,
  onChange,
  value,
  isFake,
  onPress,
  defaultValue,
  secureTextEntry,
  isTextArea,
  ...props
}) => {
  const handleOnChange = event => {
    if (onChangeText && typeof onChangeText === 'function') {
      onChangeText(event.target.value);
    }

    if (onChange && typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  const getTypeInput = () => {
    if (secureTextEntry) {
      return 'password';
    }
    return 'text';
  };

  const inputProps = {
    ...props,
    ...(value && { value }),
    ...(defaultValue && { defaultValue })
  };

  if (isFake) {
    return (
      <InputFake
        type={getTypeInput()}
        onClick={onPress}
        {...inputProps}
      />
    );
  }

  if (isTextArea) {
    return <TextArea onChange={handleOnChange} {...inputProps} />;
  }

  return (
    <InputField
      type={getTypeInput()}
      onChange={handleOnChange}
      {...inputProps}
    />
  );
};

TextInput.propTypes = {
  isTextArea: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  isFake: PropTypes.bool,
  onPress: PropTypes.func
};
TextInput.defaultProps = {
  secureTextEntry: false,
  onChangeText: () => {},
  isTextArea: false,
  onChange: () => {},
  value: null,
  defaultValue: null,
  isFake: false,
  onPress: () => {}
};

export default React.memo(TextInput);