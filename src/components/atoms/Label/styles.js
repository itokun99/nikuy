import styled from 'styled-components';
import { FONTS, THEMES } from 'utils';
import Text from '../Text';

export const LabelText = styled(Text)`
  font-family: ${({ bold }) => (bold ? FONTS.fontFamily.bold : FONTS.fontFamily.regular)};
  font-size: ${FONTS.size.xs}px;
  color: ${({ color }) => (color ? THEMES.colors[color] : THEMES.colors.dark)};
  margin-bottom: 10px;
`;