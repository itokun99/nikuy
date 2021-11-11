import styled from 'styled-components';
import { METRICS, THEMES } from 'utils';
import View from '../View';

export const Wrapper = styled(View)`
  padding-bottom: ${METRICS.gutter.xs}px;
`;

export const Content = styled(View)`
  flex-direction: row;
`;

export const Bullet = styled(View)`
  width: ${({ bulletSize }) => METRICS.getGutter(bulletSize)}px;
  height: ${({ bulletSize }) => METRICS.getGutter(bulletSize)}px;
  background-color: ${({ bulletColor }) => THEMES.getColor(bulletColor)};
  border-radius: ${({ bulletSize }) => METRICS.getGutter(bulletSize)}px;
  margin-right: ${METRICS.gutter.s}px;
  margin-top: ${METRICS.gutter.xxs + 2}px;
`;