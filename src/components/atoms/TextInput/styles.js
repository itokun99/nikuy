import styled from 'styled-components';

export const InputField = styled.input`
  width: 100%;
  ${({ withBorder }) => (!withBorder ? 'border: none' : 'border: 1px solid #C4C4C4')};
  &:focus {
    outline: none;
  }
`;

export const InputFake = styled.div`
  height: 40px;
  cursor: text;
`;

export const TextArea = styled.textarea`
  ${({ withBorder }) => (!withBorder ? 'border: none' : 'border: 1px solid #C4C4C4')};
  &:focus {
    outline: none;
  }
`;