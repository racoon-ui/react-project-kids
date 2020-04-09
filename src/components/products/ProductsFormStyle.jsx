/** @jsx jsx */
import styled from '@emotion/styled';

// 상품생성 폼 스타일
const ProductsFormStyle = styled('div')`
  padding: 50px 0;
  margin: 0 auto;
  width: 480px;
  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .form-group {
    margin-top: 20px;
    overflow: hidden;
    a {
      display: inline-block;
      width: 48%;
      margin-left: 4%;
      button {
        width: 100%;
        background: #000;
        color: #fff;
      }
    }
  }
  .control-label {
    display: block;
    font-size: 15px;
    line-height: 30px;
    font-weight: 600;
    em {
      color: #d1302f;
    }
  }
  .form-control {
    width: 100%;
    height: 40px;
    line-height: 20px;
    font-size: 15px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 0;
    padding: 10px 5px;
    background: white no-repeat;
    background-image: linear-gradient(to bottom, #d1302f, #d1302f), linear-gradient(to bottom, silver, silver);
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    border-radius: 5px 5px 0 0;
    &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: none;
      background-color: #ffe6e6;
    }
    &:-internal-autofill-selected {
      background-color: red !important;
      background-image: none !important;
      color: -internal-light-dark-color(black, white) !important;
    }
  }
  .error-container {
    line-height: 24px;
    color: #d1302f;
  }
  .infoText {
    display: block;
    text-align: right;
    margin-top: 20px;
    font-weight: 600;
    color: #d1302f;
  }
  button {
    position: relative;
    float: left;
    width: 48%;
    height: 50px;
    font-weight: 600;
    border-radius: 5px;
    font-size: 18px;
    background: #d1302f;
    color: #fff;
    ${'' /* background: ${(props) => (props.goBack ? '#000' : '#d1302f')}; */}
    ${'' /* color: ${(props) => (props.goBack ? '#fff' : '#fff')}; */}
    border: none;
    cursor: pointer;
  }
`;
export default ProductsFormStyle;
