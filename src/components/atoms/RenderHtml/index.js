/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'isomorphic-dompurify';
import { Wrapper } from './styles';

const RenderHtml = ({ htmlString, ...props }) => {
  if (!htmlString) {
    return null;
  }

  const cleanHtmlString = DOMPurify.sanitize(htmlString);

  return (
    <Wrapper {...props}>
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlString }} />
    </Wrapper>
  );
};

RenderHtml.propTypes = {
  htmlString: PropTypes.string
};

RenderHtml.defaultProps = {
  htmlString: ''
};

export default memo(RenderHtml);