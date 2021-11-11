import styled from 'styled-components';
import { METRICS } from 'utils';
import View from '../View';

export const ContainerView = styled(View)`
  position: relative;
  width: 100%;
  max-width: ${METRICS.responsive.m}px;
  padding-left: ${({ size }) => METRICS.getGutter(size)}px;
  padding-right: ${({ size }) => METRICS.getGutter(size)}px;
  border-radius : ${({ withBorderRadius }) => withBorderRadius && `${METRICS.radius.xs}px`};
`;