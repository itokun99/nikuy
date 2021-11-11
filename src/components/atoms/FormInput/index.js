import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Label,
  Input,
  PasswordLabelWrapper,
  PasswordLabel
} from './styles';

const FormInput = ({
  name,
  type,
  value,
  label,
  onBlur,
  onFocus,
  onChange,
  placeholder
}) => {
  const input = useRef();
  const [focus, setFocus] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(true);

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

  return (
    <Wrapper focus={focus} type={type}>
      <Label>{label}</Label>
      <Input
        ref={input}
        name={name}
        type={type === 'password' && visiblePassword ? 'text' : type}
        value={value}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        onChange={onChange}
        placeholder={placeholder}
      />
      {renderPasswordUtil()}
    </Wrapper>
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
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

FormInput.defaultProps = {
  type: 'text',
  name: '',
  label: '',
  value: undefined,
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {}
};

export default FormInput;