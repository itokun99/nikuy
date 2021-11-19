import styled from 'styled-components';
import { View, Icon, Text } from 'components/atoms';
import { METRICS, THEMES } from 'utils';

export const Wrapper = styled(View)`
  position: relative;
  background-color: ${THEMES.colors.darkGray};
  overflow: hidden;
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ image }) => image && `background-image: url(${image})`}
`;
export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
`;

export const ImageIcon = styled(Icon).attrs({
  icon: 'ic-image',
  size: 24
})`
  margin-right: ${METRICS.gutter.xs}px;
`;

export const TagWrapper = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: .2s;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;

  padding-top: ${METRICS.gutter.xs}px;
  padding-bottom: ${METRICS.gutter.xs}px;
  padding-left: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.s}px;
  background-color: ${THEMES.colors.light};
  border-radius: ${METRICS.radius.xxl}px;
`;

export const TagTitle = styled(Text).attrs({
  size: 'xxxs'
})``;

export const HelperText = styled(Text).attrs(({ error }) => ({
  size: 10,
  color: error ? 'danger' : 'deepGray'
}))`
  padding-top: ${METRICS.gutter.xs}px;
  padding-bottom: ${METRICS.gutter.xxs}px;
`;