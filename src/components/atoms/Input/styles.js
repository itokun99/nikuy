import styled from 'styled-components';
import { THEMES, FONTS, METRICS } from 'utils';
import Text from '../Text';
import View from '../View';
import TouchableOpacity from '../TouchableOpacity';
import TextInput from '../TextInput';

export const InputWrapper = styled(View)`
  position: relative;
  border-style: solid;
  border-radius: ${METRICS.radius.input}px;
  background-color: ${THEMES.colors.light};
  overflow: hidden;
  border-width: 1px;
  border-color: ${THEMES.colors.empty2};
  ${({ withShadow }) => withShadow
    && `
  box-shadow : 0 2px 7px 0 rgba(0,0,0, 0.3)
  `};
  ${({ type }) => type === 'textarea'
    && `
    min-height : 72px
    `};
`;

export const InputField = styled(TextInput)`
  border-radius: ${METRICS.radius.input}px;
  background-color: ${THEMES.colors.light};
  padding-left: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.s}px;
  padding-bottom: ${METRICS.gutter.xs + 2}px;
  padding-top: ${METRICS.gutter.xs + 2}px;
  font-family: ${FONTS.fontFamily.regular};
  ${({ isPassword }) => isPassword && 'padding-right: 58px'}
  ${({ withIcon }) => withIcon && 'padding-right: 42px'}
  ${({ isTextArea }) => isTextArea
    && `text-align-vertical: top; height: ${METRICS.gutter.m * 4}px;`};
`;

export const FakeInputField = styled(TouchableOpacity)`
  border-radius: ${METRICS.radius.input}px;
  background-color: ${THEMES.colors.light};
  padding-left: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.s}px;
  padding-top: ${METRICS.gutter.xxs}px;
  height: 38px;
  font-family: ${FONTS.fontFamily.regular};
  ${({ isPassword }) => isPassword && 'padding-right: 58px'}
  ${({ withIcon }) => withIcon && 'padding-right: 42px'}
`;

export const FakeValue = styled(Text)`
  padding-top: ${METRICS.gutter.xs + 2}px;
  font-size: ${FONTS.size.s}px;
`;

export const FakePlaceholder = styled(Text)`
  font-size: ${FONTS.size.xs}px;
  line-height: 20px;
  opacity: 0.6;
`;

export const IconWrapper = styled(TouchableOpacity)`
  position: absolute;
  z-index: 1;
  top: ${METRICS.gutter.xs}px;
  right: ${METRICS.gutter.s}px;
`;