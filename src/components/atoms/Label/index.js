import PropTypes from 'prop-types';
import React from 'react';
import { LabelText } from './styles';

const Label = ({ children, color, bold }) => (
  <LabelText
    color={color}
    bold={bold}
  >
    {children}
  </LabelText>
);

Label.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  bold: PropTypes.bool
};
Label.defaultProps = {
  children: null,
  color: 'black',
  bold: false
};

export default React.memo(Label);