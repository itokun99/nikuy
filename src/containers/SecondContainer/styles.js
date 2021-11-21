import styled from 'styled-components';
import { View } from 'components';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  background-color: ${THEMES.colors.light};
  ${({ padding }) => padding && `padding-top: ${90 + METRICS.gutter.m}px`};
  ${({ transparent }) => transparent && 'background-color: transparent'};
`;