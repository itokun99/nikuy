import styled from 'styled-components';
import { METRICS } from 'utils';
import View from '../View';

const getSize = size => {
  if (typeof size !== 'string' && typeof size !== 'number') {
    return 0;
  }

  if (
    typeof size === 'string'
    && size.indexOf('%') === -1
    && METRICS.gutter[size]
  ) {
    return `${METRICS.gutter[size]}px`;
  }

  if (typeof size === 'number') {
    return `${size}px`;
  }

  return size;
};

export const GapElement = styled(View)`
  ${({ width, height }) => `
      width: ${getSize(width)};
      height: ${getSize(height)};
    `}
`;