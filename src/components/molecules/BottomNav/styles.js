import styled from 'styled-components';
import { View, Icon, TouchableOpacity } from 'components/atoms';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: ${METRICS.gutter.m}px;
`;
export const Container = styled(View)`
  max-width: ${METRICS.responsive.m}px;
  width: 100%;
  margin: auto;
  padding-right: ${METRICS.gutter.m}px;
  padding-left: ${METRICS.gutter.m}px;
`;
export const Content = styled(View)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: ${THEMES.colors.light};
  overflow: hidden;
  border-radius: ${METRICS.radius.s}px;
  ${THEMES.shadow.styled.getBoxShadow()}
`;
export const Nav = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${METRICS.gutter.s}px;
  padding-bottom: ${METRICS.gutter.s}px;
  ${({ active }) => (active ? `background-color: ${THEMES.colors.primary}` : '')}
`;
export const NavIcon = styled(Icon).attrs({
  size: 32
})``;