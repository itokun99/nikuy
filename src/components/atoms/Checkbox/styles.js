import styled from 'styled-components';
import { METRICS, THEMES } from 'utils';
import TouchableOpacity from '../TouchableOpacity';

export const Wrapper = styled(TouchableOpacity)`
  ${({ size }) => size
    && `
    width: ${METRICS.getGutter(size)}px;
    height: ${METRICS.getGutter(size)}px;
  `}
  border-radius: ${METRICS.radius.xxxs}px;

  border: ${({ inactiveColor, active }) => !active && inactiveColor && `2px solid ${THEMES.getColor(inactiveColor)}`};
  ${({ active, color }) => active
    && `
    background-color: ${THEMES.getColor(color)};
    border: 2px solid ${THEMES.getColor(color)}
  `}
  justify-content: center;
  align-items: center;
`;