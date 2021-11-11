import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ContainerView } from './styles';

// Container Component
const Container = ({
  size, children, withBorderRadius, ...props
}) => (
  <ContainerView size={size} withBorderRadius={withBorderRadius} {...props}>
    {children}
  </ContainerView>
);

Container.propTypes = {
  withBorderRadius: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any
};
Container.defaultProps = {
  size: 'm',
  children: null,
  withBorderRadius: false
};

export default memo(Container);