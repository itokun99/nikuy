import styled from 'styled-components';
import { THEMES } from 'utils';
import TouchableOpacity from '../TouchableOpacity';

export const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-width: 2px;
  border: 2px solid ${THEMES.colors.secondary};
`;
export const CenterDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${THEMES.colors.secondary};
`;