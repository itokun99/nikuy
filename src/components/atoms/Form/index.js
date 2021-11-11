import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children, ...props }) => (
  <form onSubmit={onSubmit} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Form.defaultProps = {
  onSubmit: null,
  children: null
};

export default React.memo(Form);