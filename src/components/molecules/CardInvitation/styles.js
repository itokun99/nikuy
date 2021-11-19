import styled from 'styled-components';
import { View, Text } from 'components/atoms';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  padding: ${METRICS.gutter.s}px;
  border-radius: ${METRICS.radius.s}px;
  background-color: ${THEMES.colors.light};
  margin-bottom: ${METRICS.gutter.m}px;
  ${THEMES.shadow.styled.getBoxShadow()}
`;
export const Thumbnail = styled(View)`
  position: relative;
  height: 0;
  padding-bottom: 62.75%;
  background-color: ${THEMES.colors.darkGray};
  border-radius: ${METRICS.radius.s}px;
  margin-bottom: ${METRICS.gutter.s}px;
  background-position: center center;
  background-size: cover;
  ${({ image }) => image && `background-image: url(${image})`};
`;
export const ContentBody = styled(View)`
  padding-bottom: ${METRICS.gutter.s}px;
`;
export const Title = styled(Text).attrs({
  bold: true,
  color: 'dark'
})`
  margin-bottom: ${METRICS.gutter.s}px;
`;
export const Date = styled(Text).attrs({
  size: 'xxs',
  color: 'deepGray'
})`
  margin-bottom: ${METRICS.gutter.xxs}px;
`;
export const Location = styled(Text).attrs({
  size: 'xxs',
  color: 'deepGray'
})``;

export const Footer = styled(View)`
  flex-direction: row;
`;