import styled from 'styled-components';
import { TouchableOpacity, View } from 'components/atoms';
import { COLORS } from 'utils';

export const Wrapper = styled(TouchableOpacity)`
  position: relative;
  height: 0;
  padding-bottom: 100%;
`;

export const Image = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${COLORS.darkGray};
  background-position: center center;
  background-size: cover;
  ${({ image }) => image && `background-image: url(${image});`}
`;