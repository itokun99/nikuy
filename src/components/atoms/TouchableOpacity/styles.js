import styled from 'styled-components';
import { THEMES } from 'utils';

export const RNTouchableOpacity = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline-color: ${THEMES.colors.primary};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;