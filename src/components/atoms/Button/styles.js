import styled from 'styled-components';
import {
  THEMES, FONTS, METRICS, COLORS
} from 'utils';
import TouchableOpacity from '../TouchableOpacity';
import View from '../View';
import Text from '../Text';

const renderBtnBg = (color = null, disabled) => {
  if (!color) return '';

  if (disabled) {
    return `background-color: ${THEMES.colors.empty}; opacity: 0.8`;
  }

  if (THEMES.colors[color]) {
    return `background-color: ${THEMES.colors[color]}`;
  }

  if (COLORS[color]) {
    return `background-color: ${COLORS[color]}`;
  }

  return `background-color: ${THEMES.colors[color]}`;
};

const renderBtnTitle = color => {
  if (!color) return '';

  const isLightColor = color === 'light';

  if (isLightColor) {
    return `color: ${THEMES.colors.dark};`;
  }

  const isDark = color === 'dark' || color === 'primary' || color === 'secondary';

  if (isDark) {
    return `color: ${THEMES.colors.light};`;
  }

  return `color: ${THEMES.colors.dark};`;
};

export const Wrapper = styled(TouchableOpacity)`
  ${({ color, disabled }) => renderBtnBg(color, disabled)};
  ${({ size = 'm' }) => `
    padding-top: ${METRICS.gutter[size] / 1.5}px;
    padding-bottom: ${METRICS.gutter[size] / 1.5}px;
    padding-right: ${METRICS.gutter[size]}px;
    padding-left: ${METRICS.gutter[size]}px;
    `}
  overflow: hidden;
  border-radius: ${({ radius }) => METRICS.getRadius(radius, METRICS.radius.button)}px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  ${({ withBorder }) => withBorder && 'border-width: 2px; border-style: solid;'}
  ${({ borderColor }) => borderColor && `border-color: ${THEMES.getColor(borderColor)};`}
  box-shadow: ${({ withShadow }) => withShadow && '0 4px 16px rgba(0,0,0,0.1)'};
`;

export const Title = styled(Text)`
  font-size: ${({ size = 'm' }) => `
      ${FONTS.size[size]}px;
    `};
  font-family: ${FONTS.fontFamily.regular};
  color: ${({ titleColor }) => (titleColor ? THEMES.colors[titleColor] : THEMES.colors.light)};
  ${({ color }) => renderBtnTitle(color)};
  text-align: center;
`;

export const TitleIconWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;