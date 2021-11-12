import styled, { keyframes } from 'styled-components';
import { View, Icon, Text } from 'components/atoms';
import { METRICS } from 'utils';

const scalling = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;

export const Wrapper = styled(View)`
  position: fixed;
  background-color: rgba(255, 255, 255,0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -999;
  opacity: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: .2s;
  ${({ visible }) => visible && `
    z-index: 999;
    opacity: 1;
  `}
`;
export const Content = styled(View)`
  width: 100%;
  padding-left: ${METRICS.gutter.m}px;
  padding-right: ${METRICS.gutter.m}px;
  justify-content: center;
  align-items: center;
`;
export const LoadingTitle = styled(Text).attrs({
  bold: true,
  size: 'xxs'
})``;
export const LoadingIcon = styled(Icon).attrs({
  icon: 'ic-love',
  size: 76
})`
  margin-bottom: ${METRICS.gutter.xs}px;
  animation: ${scalling} 1s linear infinite;
`;