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
  ${THEMES.shadow.styled.getBoxShadow()}
`;
export const Photo = styled(Image)`
`;
export const ContentWrapper = styled(View)`
  flex: 1;
  justify-content: center;
`;
export const Name = styled(Text).attrs({
  size: 'm',
  align: 'center',
  lineHeight: 24
})`
  margin-bottom: ${METRICS.gutter.m}px;
`;
export const Subname = styled(Text).attrs({
  size: 'xxxs'
})`
  opacity: .6;
`;