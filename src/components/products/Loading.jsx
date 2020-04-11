import React from 'react';
import styled, { keyframes } from 'styled-components';

// 로딩중
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 50px 0 200px;
  text-align: center;
  span {
    font-size: 30px;
    font-weight: 600;
    margin-right: 10px;
  }
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
const Loading = () => {
  return (
    <DotWrapper>
      <span>Loading</span>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};
export default Loading;
