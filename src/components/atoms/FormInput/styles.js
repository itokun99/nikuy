import styled from 'styled-components';
import { METRICS, THEMES } from 'utils';
import View from '../View';
import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';

export const Wrapper = styled(View)`
  position: relative;
  width: 100%;
  height: 54px;
  background-color: rgba(0,0,0,0.04);
  border-radius: ${METRICS.radius.xs + 4}px;
  border: 1.5px solid transparent;
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${METRICS.gutter.xs}px;
  ${({ focus }) => focus && `
    background-color: ${THEMES.colors.light};
    border-color:${THEMES.colors.primary};
  `}
  ${({ type }) => (type && type === 'password' ? `
    padding-right: 50px;
  ` : '')}

${({ type }) => (type && type === 'textarea' ? `
    height: 150px;
  ` : '')}
${({ type }) => (type && type === 'select' ? `
    padding-right: ${METRICS.gutter.s}px;
  ` : '')}

  ${({ error }) => error && `
    background-color: ${THEMES.colors.light};
    border-color: ${THEMES.colors.danger}
  `}
`;
export const Label = styled(Text).attrs(({ error }) => ({
  size: 'xxxs',
  color: error ? 'danger' : 'dark'
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: .7;
  margin-top: ${METRICS.gutter.xs}px;
  margin-left: ${METRICS.gutter.s}px;
`;
export const Input = styled.input`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  padding-left: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.s}px;
  width: 100%;
  color: ${THEMES.colors.dark};
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${THEMES.colors.dark};
    opacity: .3;
  }
  :-ms-input-placeholder {
     color: ${THEMES.colors.dark};
     opacity: .3;
  }
`;

export const InputArea = styled.textarea`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  padding-left: ${METRICS.gutter.s}px;
  padding-right: ${METRICS.gutter.s}px;
  width: 100%;
  height: ${150 - 40}px;
  color: ${THEMES.colors.dark};
  resize: none;
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${THEMES.colors.dark};
    opacity: .3;
  }
  :-ms-input-placeholder {
     color: ${THEMES.colors.dark};
     opacity: .3;
  }
`;

export const InputSelect = styled.select`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  padding-left: ${METRICS.gutter.s - 4}px;
  padding-right: ${METRICS.gutter.s}px;
  width: 100%;
  /* height: ${150 - 40}px; */
  color: ${THEMES.colors.dark};
  resize: none;
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${THEMES.colors.dark};
    opacity: .3;
  }
  :-ms-input-placeholder {
     color: ${THEMES.colors.dark};
     opacity: .3;
  }
`;

export const PasswordLabelWrapper = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  top: 0;
  z-index:1;
  margin-top: ${METRICS.gutter.s + 4}px;
  margin-right: ${METRICS.gutter.s}px;
`;
export const PasswordLabel = styled(Text).attrs({
  size: 'xxxs'
})``;

export const HelperText = styled(Text).attrs(({ error }) => ({
  size: 10,
  color: error ? 'danger' : 'deepGray'
}))`
  padding-top: ${METRICS.gutter.xs}px;
  padding-bottom: ${METRICS.gutter.xxs}px;
`;