import PropTypes from 'prop-types';
import React from 'react';
import Gap from '../Gap';
import Icon from '../Icon';
import { Title, TitleIconWrapper, Wrapper } from './styles';

// Button Component
const Button = ({
  size,
  icon,
  type,
  color,
  title,
  radius,
  onPress,
  children,
  disabled,
  titleProps,
  withShadow,
  withBorder,
  iconProps,
  borderColor,
  ...props
}) => {
  const renderTitle = () => {
    // has children returning children wrap in button
    if (children) {
      return children;
    }

    // has icon return button with icon wrapper
    if (icon && title) {
      return (
        <TitleIconWrapper>
          <Icon icon={icon} size={24} {...iconProps} />
          <Gap width="xs" />
          <Title disabled={disabled} size={size} color={color} bold {...titleProps}>
            {title}
          </Title>
        </TitleIconWrapper>
      );
    }

    if (icon && !title) {
      return (
        <Icon icon={icon} size={24} {...iconProps} />
      );
    }

    if (title) {
      // default return button with title text
      return (
        <Title disabled={disabled} size={size} bold color={color} {...titleProps}>
          {title}
        </Title>
      );
    }

    return null;
  };

  return (
    <Wrapper
      size={size}
      withShadow={withShadow}
      onPress={!disabled && onPress}
      color={color}
      radius={radius}
      withBorder={withBorder}
      borderColor={borderColor}
      disabled={disabled}
      type={type}
      {...props}
    >
      {renderTitle()}
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  onPress: PropTypes.func,
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  titleProps: PropTypes.object,
  withShadow: PropTypes.bool,
  size: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withBorder: PropTypes.bool,
  borderColor: PropTypes.string
};
Button.defaultProps = {
  type: 'button',
  color: 'primary',
  icon: '',
  title: '',
  size: 'm',
  disabled: false,
  children: null,
  titleProps: null,
  withShadow: false,
  radius: 'button',
  withBorder: false,
  borderColor: 'primary',
  onPress: () => {}
};

export default React.memo(Button);