import styled from 'styled-components';
import { THEMES } from 'utils';
import View from '../View';

export const LineElement = styled(View)`
  background-color: ${({ color }) => THEMES.getColor(color, THEMES.colors.empty)};
  height: ${({ height }) => height}px;
`;