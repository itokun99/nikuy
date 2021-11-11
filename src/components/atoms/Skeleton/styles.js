import styled from 'styled-components';
import { COLORS } from 'utils';
import View from '../View';

export const Content = styled(View)`
  background-color: ${COLORS.darkGray};
  width: ${({ width }) => `${width}px`};
  border-radius: 10px;
  height: ${({ height }) => `${height}px`};
`;