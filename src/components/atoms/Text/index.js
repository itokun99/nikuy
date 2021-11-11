import React from 'react';
import PropTypes from 'prop-types';
import { CustomText } from './styles';
import TouchableOpacity from '../TouchableOpacity';

const Text = ({
  link,
  href,
  size,
  color,
  strike,
  bold,
  medium,
  children,
  onPressLink,
  lineHeight,
  title,
  align,
  ...props
}) => {
  if (link) {
    return (
      <TouchableOpacity onPress={onPressLink}>
        <CustomText
          size={size}
          strike={strike}
          link={link}
          color={color}
          lineHeight={lineHeight}
          bold={bold}
          medium={medium}
          align={align}
          {...props}
        >
          {children}
        </CustomText>
      </TouchableOpacity>
    );
  }
  return (
    <CustomText
      size={size}
      strike={strike}
      color={color}
      bold={bold}
      medium={medium}
      lineHeight={lineHeight}
      align={align}
      {...props}
    >
      {children}
    </CustomText>
  );
};

Text.propTypes = {
  title: PropTypes.string,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  children: PropTypes.any,
  onPressLink: PropTypes.func,
  link: PropTypes.bool,
  href: PropTypes.string,
  strike: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Text.defaultProps = {
  title: '',
  link: false,
  href: null,
  onPressLink: null,
  children: null,
  strike: false,
  color: null,
  size: 'm',
  lineHeight: null,
  bold: false,
  medium: false,
  align: null
};

export default React.memo(Text);