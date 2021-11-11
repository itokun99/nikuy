import styled from 'styled-components';
import View from '../View';

export const MyScrollContainer = styled(View)`
  overflow-y: auto;
  flex: 1;
`;

export const Block = styled.div`
  box-sizing: border-box;

  display: block;
  padding: 5px;
  transform: rotate(90deg);
  transform-origin: right top;
  width: 100%;
  height: 100%;
`;

export const Horizontal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled(View)``;