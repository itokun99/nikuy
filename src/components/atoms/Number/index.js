import React, { memo } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Text from '../Text';

const Number = ({
  value,
  bold,
  style,
  currency,
  textProps,
  formatProps,
  children,
  withRender,
  ...props
}) => {
  const formatValue = value || children;

  if (formatValue === null || typeof formatValue === 'undefined') {
    return null;
  }

  const renderText = textValue => (
    <Text bold={bold} style={style} {...textProps} {...props}>
      {textValue}
    </Text>
  );

  return (
    <NumberFormat
      value={formatValue}
      prefix={currency ? 'Rp ' : ''}
      displayType="text"
      decimalSeparator=","
      thousandSeparator="."
      withRender
      renderText={renderText}
      {...formatProps}
    />
  );
};

Number.propTypes = {
  bold: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.any,
  currency: PropTypes.bool,
  textProps: PropTypes.object,
  formatProps: PropTypes.object,
  withRender: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Number.defaultProps = {
  style: {},
  bold: false,
  value: null,
  currency: false,
  textProps: null,
  withRender: true,
  formatProps: null,
  children: null
};

export default memo(Number);