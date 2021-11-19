import styled from 'styled-components';
import { View } from 'components/atoms';
import { METRICS } from 'utils';

export const FormRow = styled(View)`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: ${METRICS.gutter.s}px;
`;

export const FormColumn = styled(View)``;