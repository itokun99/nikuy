import styled from 'styled-components';
import {
  View, Text, Icon, TouchableOpacity
} from 'components/atoms';
import { METRICS, FONTS } from 'utils';

export const Wrapper = styled(View)`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index:2;
`;

export const Container = styled(View)`
  max-width: ${METRICS.responsive.m}px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: ${METRICS.gutter.m}px;
  padding-bottom: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  padding-left: ${METRICS.gutter.m}px;
`;

export const BackIconWrapper = styled(TouchableOpacity)`
  margin-right: ${METRICS.gutter.s}px;
`;
export const BackIcon = styled(Icon).attrs({
  icon: 'ic-back',
  size: 40
})``;

export const Title = styled(Text).attrs(prop => ({
  color: 'dark',
  size: prop?.large ? 'xxl' : 'xl'
}))`
  font-family: ${FONTS.fontFamily.big};
`;