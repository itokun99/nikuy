import React from 'react';
import PropTypes from 'prop-types';
import { RNView } from './styles';

const View = ({ children, ...props }) => (
  <RNView {...props}>
    {children}
  </RNView>
);

View.propTypes = {
  children: PropTypes.any
};
View.defaultProps = {
  children: null
};

export default React.memo(View);