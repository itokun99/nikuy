import styled from 'styled-components';
import { View } from 'components/atoms';
import { THEMES, METRICS } from 'utils';

export const Wrapper = styled(View)`
  background-color: ${THEMES.colors.light};
  border-radius: ${METRICS.radius.xs}px;
  padding: ${METRICS.gutter.s}px;
  width: 100%;
  max-width: 320px;
`;

export const ActionWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;