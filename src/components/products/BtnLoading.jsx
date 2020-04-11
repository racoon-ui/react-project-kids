import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BtnLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -75px;
  margin-top: -15px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #000;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default BtnLoading;
