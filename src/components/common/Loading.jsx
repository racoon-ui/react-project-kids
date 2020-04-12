/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const LodingBar = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 100px auto;
  padding: 10px;
  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translateY(-40px);
  }

  div:nth-of-type(1) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #000;
    animation: dot 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  div:nth-of-type(2) {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #000;
    animation: dot 2s 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  div:nth-of-type(3) {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #000;
    animation: dot 2s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  div:nth-of-type(4) {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #000;
    animation: dot 2s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  div:nth-of-type(5) {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: #000;
    animation: dot 2s 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  @keyframes dot {
    0% {
      transform: rotate(0deg) translateY(-40px);
    }
    100% {
      transform: rotate(360deg) translateY(-40px);
    }
  }
`;

const Loding = () => {
  return (
    <LodingBar>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LodingBar>
  );
};

export default Loding;
