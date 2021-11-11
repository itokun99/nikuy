import styled from 'styled-components';
import { THEMES } from 'utils';
import TextInput from '../TextInput';
import TouchableOpacity from '../TouchableOpacity';
import View from '../View';

export const Wrapper = styled(View)`
  flex-direction: row;
`;
export const ActionWrapper = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => THEMES.getColor(color)};
  justify-content: center;
  align-items: center;
`;
export const ActionInput = styled(TextInput)`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${THEMES.colors.empty2};
  padding: 0;
  width: 40px;
  text-align: center;
  height: 20px;
`;