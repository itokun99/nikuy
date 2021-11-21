import styled from 'styled-components';
import { COLORS, METRICS, THEMES } from 'utils';
import View from '../View';

export const Background = styled.div`
  position: relative;
  z-index: 8;
  height: auto;
  width: 100%;
  bottom: 0;
  background: ${COLORS.light};
  border-top-left-radius: ${METRICS.radius.m}px;
  border-top-right-radius: ${METRICS.radius.m}px;
  ${THEMES.shadow.styled.getBoxShadow()}
`;

export const BackdropAction = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 7;
  max-width: ${METRICS.responsive.m}px;
  width: 100%;
  height: 100%;
  background-color: 'transparent';
  ${({ visible }) => !visible && `
    opacity: 0;
    z-index: -1;
    background-color: transparent;
  `}
`;

export const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 7;
  max-width: ${METRICS.responsive.m}px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  transition: .3s;
  opacity: 1;
  ${({ visible }) => !visible && `
    opacity: 0;
    z-index: -1;
    background-color: transparent;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 8;
  max-width: ${METRICS.responsive.m}px;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  background: transparent;
  transition: .3s;
  opacity: 1;
  transform: translateY(0);
  ${({ visible }) => !visible && `
    transform: translateY(100%);
    opacity: 0;
  `}

  ${({ backdrop }) => !backdrop && 'top: auto;height: auto;'}
`;

export const MiddleWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  top: 0;
  max-width: ${METRICS.responsive.m}px;
  z-index: 8;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: .3s;
  opacity: 1;
  transform: translateY(0);
  ${({ visible }) => !visible && `
    transform: translateY(100%);
    opacity: 0;
  `}
`;

export const ModalHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${METRICS.gutter.m}px;
`;

export const LineWrapper = styled(View)`
  padding-top: ${METRICS.gutter.xs}px;
  padding-bottom: ${METRICS.gutter.xs}px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Line = styled(View)`
  height: ${METRICS.gutter.xs}px;
  width: 50px;
  background-color: ${THEMES.colors.darkGray};
  border-radius: ${METRICS.radius.s}px;
`;