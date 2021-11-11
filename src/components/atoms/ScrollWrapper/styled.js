import styled from 'styled-components';
import View from '../View';

export const Wrapper = styled(View)`
  ${({ height }) => `height: ${height}px;`}
  position: relative;
`;