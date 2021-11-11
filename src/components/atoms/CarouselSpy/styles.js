import styled from 'styled-components';
import { COLORS, METRICS } from 'utils';
import View from '../View';

export const ActiveCarousel = styled(View)`
  position: relative;
  z-index: 1;
  width: 15px;
  height: 8px;
  background: ${COLORS.light};
  border-radius: ${METRICS.radius.xxl}px;
  margin-left : 5px;
  `;

export const InactiveCarousel = styled(View)`
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: ${METRICS.radius.xs}px;
  z-index: 1;
  margin-left : 5px;
`;