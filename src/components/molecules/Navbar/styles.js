import styled from 'styled-components';
import {
  View, Text, Icon, TouchableOpacity
} from 'components/atoms';
import { THEMES, METRICS } from 'utils';

export const Wrapper = styled(View)`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  background-color: ${THEMES.colors.light};
  z-index: 2;
  ${THEMES.shadow.styled.getBoxShadow()}
`;

export const Container = styled(View)`
  max-width: ${METRICS.responsive.m}px;
  margin: auto;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${METRICS.gutter.m}px;
  padding-left: ${METRICS.gutter.m}px;
`;

export const Title = styled(Text).attrs(prop => ({
  color: 'primary',
  size: prop?.large ? 'xxl' : 'xl'
}))`
  font-family: 'Titan One', cursive;
`;

export const NotifWrapper = styled(TouchableOpacity)`
  position: relative;
`;

export const NotifBadge = styled(View)`
  position: absolute;
  right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${THEMES.colors.primary};
`;

export const NotifIcon = styled(Icon).attrs({
  icon: 'ic-notif',
  size: 32
})``;