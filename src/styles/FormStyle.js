/** @jsx jsx */
import styled from '@emotion/styled';

const FormStyle = styled('div')`
  padding: 80px 20px;
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #c9c9c9;
  }
  .join_row {
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .input_control {
    width: 100%;
    border: 2px solid #c9c9c9;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    &.error {
      border-color: red;
    }
    &.ok {
      border-color: green;
    }
  }
  .txt_errors {
    color: red;
    margin-top: 10px;
    font-weight: bold;
  }
  .btn_box {
    margin-top: 40px;
    button {
      display: block;
      font-weight: bold;
      width: 100%;
      height: 60px;
      line-height: 56px;
      font-size: 20px;
      color: #fff;
      background: #0062a9;
      &:disabled {
        background: gray;
      }
    }
  }
`;

export default FormStyle;
