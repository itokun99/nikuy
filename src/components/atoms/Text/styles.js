import styled from 'styled-components';
import { FONTS, THEMES } from 'utils';

const getFontColor = ({ color, light, link }) => {
  if (color) {
    return THEMES.getColor(color, THEMES.colors.dark);
  }

  if (light) {
    return THEMES.colors.light;
  }

  if (link) {
    return THEMES.colors.link;
  }

  return THEMES.colors.dark;
};

const getTextDecoration = ({ underline, strike }) => {
  if (strike) {
    return `
      text-decoration-line: line-through;
      text-decoration-style: solid;
      text-decoration-color: black;
      `;
  }

  if (underline) {
    return 'text-decoration-line: underline;';
  }
  return '';
};

export const CustomText = styled.span`
  font-size: ${({ size }) => `${FONTS.getSize(size)}px`};
  color: ${getFontColor};
  ${getTextDecoration};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px`};
  text-align: ${({ align }) => align};
`;

export const CustomLink = styled.a`
  font-family: ${({
    bold, medium, italic, family
  }) => FONTS.getFontStyle({
    bold, medium, italic, family
  })};
  font-size: ${({ size }) => `${FONTS.getSize(size)}px`};
  color: ${getFontColor};
  ${getTextDecoration};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px`};
  text-align: ${({ align }) => align || 'left'};
`;