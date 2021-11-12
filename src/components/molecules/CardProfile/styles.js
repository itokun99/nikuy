import styled from 'styled-components';
import { View, Text } from 'components/atoms';
import Image from 'next/image';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  position: relative;
  padding-top: ${METRICS.gutter.m}px;
  padding-bottom: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  padding-left: ${METRICS.gutter.m}px;
  background-color: ${THEMES.colors.light};
  border-radius: ${METRICS.radius.xs + 4}px;
  margin-bottom: ${METRICS.gutter.m}px;
  display: grid;
  grid-template-columns: 48px auto;
  ${THEMES.shadow.styled.getBoxShadow()}
`;
export const Photo = styled(Image)`
  border-radius: 48px;
`;
export const ContentWrapper = styled(View)`
  margin-left: ${METRICS.gutter.s}px;
  flex: 1;
  justify-content: center;
`;
export const Name = styled(Text).attrs({
  bold: true,
  size: 's'
})`
  margin-bottom: ${METRICS.gutter.xs}px;
`;
export const Subname = styled(Text).attrs({
  size: 'xxxs'
})`
  opacity: .6;
`;