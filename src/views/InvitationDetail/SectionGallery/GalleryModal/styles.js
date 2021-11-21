import styled from 'styled-components';
import { View, TouchableOpacity, Icon } from 'components';
import { THEMES, METRICS } from 'utils';

export const Wrapper = styled(View)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  transition: .3s;
  z-index: -999;
  opacity: 0;
  ${({ show }) => show && `
    opacity: 1;
    z-index: 9999;
  `}
`;

export const SliderWrapper = styled(View)`
  margin: auto;
  max-width: 900px;
  width: 100%;
`;

export const ImageWrapper = styled(View)`
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${({ image }) => image && `background-image: url(${image});`}
`;

export const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  background-color: ${THEMES.colors.danger};
  z-index: 999;
  top: 0;
  right: 0;
  margin-top: ${METRICS.gutter.s}px;
  margin-right: ${METRICS.gutter.s}px;
  padding: ${METRICS.gutter.xxs}px;
  border-radius: ${METRICS.radius.xs}px;
`;

export const CloseIcon = styled(Icon).attrs({
  icon: 'ic-close-light',
  size: 24
})``;