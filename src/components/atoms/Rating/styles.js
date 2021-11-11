import styled from 'styled-components';
import { FONTS, METRICS } from 'utils';
import Text from '../Text';
import View from '../View';

export const Wrapper = styled(View)`
  flex-direction: row;
`;

export const Counter = styled(Text)`
  font-size: ${FONTS.size.xxxs - 2}px;
  margin-left: ${METRICS.gutter.xxs}px;
  line-height: 12px;
`;