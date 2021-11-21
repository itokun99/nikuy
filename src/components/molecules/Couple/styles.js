import styled from 'styled-components';
import { View, Text } from 'components/atoms';
import Image from 'next/image';
import { METRICS } from 'utils';

export const Wrapper = styled(View)`
  display: grid;
  ${({ position }) => {
    if (position === 'right') {
      return 'grid-template-columns: auto 120px;';
    }

    return 'grid-template-columns: 120px auto;';
  }}
  grid-column-gap: ${METRICS.gutter.m}px;
  margin-bottom: ${METRICS.gutter.l}px;
`;
export const TextWrapper = styled(View)`
  justify-content: center;
  ${({ position }) => position && `text-align: ${position}`};
`;
export const Photo = styled(Image).attrs({
  layout: 'fixed',
  width: 120,
  height: 120,
  placeholder: 'blur',
  blurDataURL: '/assets/images/img-default.svg'
})`
  border-radius: 120px;
`;
export const Title = styled(Text).attrs({
  bold: true,
  size: 's'
})`
  margin-bottom: ${METRICS.gutter.xs}px;
`;
export const Description = styled(Text).attrs({
  size: 'xxs',
  lineHeight: 18
})``;