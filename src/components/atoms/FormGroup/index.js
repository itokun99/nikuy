import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const FormGroup = ({ children }) => <Wrapper>{children}</Wrapper>;

FormGroup.propTypes = {
  children: PropTypes.node
};
FormGroup.defaultProps = {
  children: null
};

export default React.memo(FormGroup);