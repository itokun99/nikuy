import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Label,
  Input,
  HelperText,
  PasswordLabel,
  PasswordLabelWrapper
} from './styles';

const FormInput = ({
  name,
  type,
  value,
  label,
  error,
  helper,
  onBlur,
  onFocus,
  disabled,
  onChange,
  placeholder,
  errorMessage
}) => {
  const input = useRef();
  const [focus, setFocus] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const onInputFocus = () => {
    onFocus();
    setFocus(true);
  };

  const onInputBlur = () => {
    onBlur();
    setFocus(false);
  };

  const onPressVisiblePassword = () => {
    setVisiblePassword(prev => !prev);
    if (!focus) {
      setFocus(true);
      if (input && input.current) {
        input.current.focus();
      }
    }
  };

  const renderPasswordUtil = () => {
    if (type === 'password') {
      return (
        <PasswordLabelWrapper onPress={onPressVisiblePassword}>
          <PasswordLabel>Lihat</PasswordLabel>
        </PasswordLabelWrapper>
      );
    }

    return null;
  };

  const renderHelperText = () => {
    if (error && errorMessage) {
      return (
        <HelperText error={error}>
          {errorMessage}
        </HelperText>
      );
    }

    if (helper) {
      return (
        <HelperText>
          {HelperText}
        </HelperText>
      );
    }

    return null;
  };

  return (
    <>
      <Wrapper focus={focus} type={type} error={error} disabled={disabled}>
        <Label error={error} disabled={disabled}>{label}</Label>
        <Input
          ref={input}
          name={name}
          type={type === 'password' && visiblePassword ? 'text' : type}
          value={value}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
        />
        {renderPasswordUtil()}
      </Wrapper>
      {renderHelperText()}
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.oneOf([
    'password',
    'email',
    'text',
    'number',
    'date',
    'textarea'
  ]),
  error: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

FormInput.defaultProps = {
  type: 'text',
  name: '',
  label: '',
  error: false,
  value: undefined,
  helper: '',
  disabled: false,
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {}
};

export default FormInput;