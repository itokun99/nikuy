import styled from 'styled-components';
import { View, TouchableOpacity, Text } from 'components';
import { METRICS, THEMES, COLORS } from 'utils';

export const ButtonWrapper = styled(View)`
  border-radius: ${METRICS.radius.s}px;
  display: grid;
  grid-template-columns: auto auto;
  overflow: hidden;
  margin-bottom: ${METRICS.gutter.m}px;
`;

export const Button = styled(TouchableOpacity)`
  padding-top: ${METRICS.gutter.s}px;
  padding-bottom: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.xs}px;
  padding-left: ${METRICS.gutter.xs}px;
  background-color: ${COLORS.darkGray};
  text-align: center;
  ${({ active }) => active && `background-color: ${THEMES.colors.primary};`}
`;

export const ItemWrapper = styled(View)`
  border-radius: ${METRICS.radius.xs}px;
  border: 1px solid ${COLORS.darkGray};
  padding-top: ${METRICS.gutter.s}px;
  padding-bottom: ${METRICS.gutter.s}px;
  padding-left: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  margin-bottom: ${METRICS.gutter.s}px;
`;

export const ContentWrapper = styled(View)`
  max-height: 500px;
  overflow-y: auto;
`;

export const GreetingWrapper = styled(View)`
  padding-top: ${METRICS.gutter.s}px;
  padding-bottom: ${METRICS.gutter.s}px;
  padding-left: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  border-radius: ${METRICS.radius.xs}px;
  border: 1px solid ${THEMES.colors.secondary};
  margin-bottom: ${METRICS.gutter.m}px;
  background-color: ${THEMES.colors.secondary};
`;

export const ButtonTitle = styled(Text).attrs(({ active }) => ({
  size: 'xxs',
  color: active ? 'light' : 'dark',
  bold: true
}))``;