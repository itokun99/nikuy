import styled from 'styled-components';
import { THEMES } from 'utils';
import View from '../View';
import TouchableOpacity from '../TouchableOpacity';

export const Wrapper = styled(TouchableOpacity)`
  width: 50px;
  height: 20px;
  border-radius: 100px;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  ${({ status }) => {
    if (status) {
      return `
        justify-content: flex-end;
        border-color: ${THEMES.colors.secondary};
        background-color: ${THEMES.colors.secondary};
      `;
    }

    return `
      border-color: ${THEMES.colors.empty2};
      background-color: ${THEMES.colors.light};
    `;
  }}
  ${THEMES.shadow.styled.getBoxShadow(3)}
`;
export const Bullet = styled(View)`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  ${({ status }) => {
    if (status) {
      return `
        margin-right: 2px;
        background-color: ${THEMES.colors.light};
      `;
    }

    return `
      margin-left: 2px;
      background-color: ${THEMES.colors.dark};
    `;
  }};
`;