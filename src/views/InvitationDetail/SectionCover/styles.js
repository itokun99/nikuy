import styled from 'styled-components';
import { View } from 'components';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  transition: 1s;
  background-color: rgba(0,0,0,0.5);
  z-index: -99999;
  transform: translateY(100%);
  ${({ show }) => show && `
    transform: translateY(0);
    z-index: 99999;
  `}
`;
export const ImageWrapper = styled(View)`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 480px;
  background-color: ${THEMES.colors.darkGray};
  margin:auto;
  background-position: center center;
  background-size: contain;
  ${({ image }) => image && `background-image: url(${image});`}
`;

export const BottomWrapper = styled(View)`
  margin-bottom: ${METRICS.gutter.m}px;
`;