import styled from 'styled-components';
import { View, Text, Icon as NativeIcon } from 'components/atoms';
import { METRICS } from 'utils';

export const Wrapper = styled(View)`
  display: grid;
  grid-template-columns: 48px auto;
  grid-column-gap: ${METRICS.gutter.s}px;
  margin-bottom: ${METRICS.gutter.l}px;
`;

export const TextWrapper = styled(View)``;
export const Title = styled(Text).attrs({
  size: 's',
  bold: true
})`
  margin-bottom: ${METRICS.gutter.s}px;
`;
export const Subtitle = styled(Text).attrs({
  size: 'xxs',
  color: 'deepGray'
})`
  margin-bottom: ${METRICS.gutter.s}px;
`;
export const Description = styled(Text).attrs({
  size: 'xs',
  lineHeight: 18
})``;

export const Icon = styled(NativeIcon).attrs({
  icon: 'ic-calendar',
  size: 48
})``;