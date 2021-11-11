import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #C4C4C4 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 3s ease-in infinite;
  border-radius: ${props => `${props.borderRadius}px` || '0px'};

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -140% 0%;
    }
  }
`;