import React, { memo } from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import Text from '../Text';
import Label from '../Label';
import Gap from '../Gap';
import Line from '../Line';

const FormText = ({
  label, value, valueProps, labelProps, ...props
}) => (
  <View {...props}>
    <Label size="xxs" bold={false} {...labelProps}>
      {label}
    </Label>
    <Text size="s" {...valueProps}>
      {value}
    </Text>
    <Gap height="xs" />
    <Line />
  </View>
);

FormText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  valueProps: PropTypes.object,
  labelProps: PropTypes.object
};
FormText.defaultProps = {
  label: null,
  value: null,
  valueProps: null,
  labelProps: null
};

export default memo(FormText);