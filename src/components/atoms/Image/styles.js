import styled from 'styled-components';
import View from '../View';

export const RNImage = styled(View)`
  ${({ src }) => (src ? `background-image: url(${src})` : '')};
  background-size: ${({ resizeMode }) => (resizeMode || 'cover')};
  background-repeat: no-repeat;
  ${({ onClick }) => (onClick ? 'cursor: pointer' : '')}
`;