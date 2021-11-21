import styled from 'styled-components';
import { Icon, TouchableOpacity } from 'components';
import { METRICS, THEMES } from 'utils';

export const IconWrapper = styled(TouchableOpacity)`
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 24px;
  margin-right: ${METRICS.gutter.m}px;
  margin-bottom: ${METRICS.gutter.m}px;
  padding: ${METRICS.gutter.xs}px;
  background-color: ${THEMES.colors.primary};
`;

export const PlayIcon = styled(Icon).attrs({
  size: 24,
  icon: 'ic-play-light'
})``;

export const PauseIcon = styled(Icon).attrs({
  size: 24,
  icon: 'ic-pause-light'
})``;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;