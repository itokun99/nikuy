import PropTypes from 'prop-types';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ContentContainer, MyScrollContainer } from './styles';

const ScrollView = ({
  containerStyle,
  style,
  children,
  horizontal,
  className
}) => {
  if (horizontal) {
    return (
      <ScrollContainer hideScrollbars vertical={false}>
        {children}
      </ScrollContainer>
    );
  }

  return (
    <MyScrollContainer className={className} style={style}>
      <ContentContainer style={containerStyle}>{children}</ContentContainer>
    </MyScrollContainer>
  );
};

ScrollView.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any,
  horizontal: PropTypes.bool,
  className: PropTypes.string,
  containerStyle: PropTypes.any
};
ScrollView.defaultProps = {
  style: null,
  children: null,
  className: '',
  horizontal: false,
  containerStyle: null
};

export default React.memo(ScrollView);