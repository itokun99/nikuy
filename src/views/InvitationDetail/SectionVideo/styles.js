import styled from 'styled-components';
import { View } from 'components';
import { THEMES, METRICS } from 'utils';

export const Wrapper = styled(View)`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  background-color: ${THEMES.colors.deepGray};
  margin-bottom: ${METRICS.gutter.m}px;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;