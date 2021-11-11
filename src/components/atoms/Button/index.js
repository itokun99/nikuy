import PropTypes from 'prop-types';
import React from 'react';
import Gap from '../Gap';
import Icon from '../Icon';
import { Title, TitleIconWrapper, Wrapper } from './styles';

// Button Component
const Button = ({
  title,
  children,
  icon,
  color,
  onPress,
  titleProps,
  withShadow,
  radius,
  size,
  withBorder,
  borderColor,
  disabled,
  ...props
}) => {
  const renderTitle = () => {
    // has children returning children wrap in button
    if (children) {
      return children;
    }

    // has icon return button with icon wrapper
    if (icon) {
      return (
        <TitleIconWrapper>
          <Icon icon={icon} size={24} />
          <Gap width="xs" />
          <Title disabled={disabled} size={size} color={color} bold {...titleProps}>
            {title}
          </Title>
        </TitleIconWrapper>
      );
    }

    // default return button with title text
    return (
      <Title disabled={disabled} size={size} bold color={color} {...titleProps}>
        {title}
      </Title>
    );
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
      {...props}
    >
      {renderTitle()}
    </Wrapper>
  );
};

Button.propTypes = {
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