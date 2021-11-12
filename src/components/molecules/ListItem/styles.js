import styled from 'styled-components';
import {
  View, TouchableOpacity, Text, Icon
} from 'components/atoms';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  padding-top: ${METRICS.gutter.xs}px;
  padding-bottom: ${METRICS.gutter.xs}px;
  padding-left: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  background-color: ${THEMES.colors.light};
  margin-bottom: ${METRICS.gutter.xs}px;
  border-radius: ${METRICS.radius.xs + 4}px;
  ${THEMES.shadow.styled.getBoxShadow()}
`;
export const LeftIcon = styled(Icon).attrs({
  size: 32
})`
  margin-right: ${METRICS.gutter.s}px;
`;
export const ContentWrapper = styled(View)``;
export const Title = styled(Text).attrs({
  size: 's'
})``;
export const Subtitle = styled(Text)``;