import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Wrapper } from './styles';

const RenderHtml = ({ htmlString }) => {
  if (!htmlString) {
    return null;
  }

  const cleanHtmlString = DOMPurify.sanitize(htmlString);

  return (
    <Wrapper>
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