/** @jsx jsx */
import styled from '@emotion/styled';

const ProductsListStyle = styled('div')`
  //menuListStyle
  .menuListInfo {
    overflow: hidden;
    margin-left: -3%;
    > li {
      border: 1px solid #d4d4d4;
      display: inline-block;
      width: 22.5%;
      margin-left: 2%;
      margin-top: 3%;
      vertical-align: top;
      overflow: hidden;
      &:hover {
        border: 1px solid #d74849;
        transition: all 0.5s ease-in-out;
        img {
          transform: scale(1.08);
          transition: all 0.5s ease-in-out;
        }
      }
      > a {
        color: #000;
        font-size: 15px;
        line-height: 24px;
        display: block;
        .menuImg {
          text-align: center;
          overflow: hidden;
          img {
            max-width: 100%;
            transition: all 0.5s ease-in-out;
          }
        }
        .menuInfo {
          padding: 20px;
          p {
            display: block;
            line-height: 28px;
          }
          .menuPrice {
            font-weight: 600;
            color: #d74949;
          }
        }
      }
    }
    button {
      float: left;
      width: 50%;
      border: none;
      height: 40px;
      font-size: 14px;
      cursor: pointer;
    }
    .openBtnModal {
      border-top: 1px solid #ccc;
      width: 100%;
    }
    .modifyBtn {
      background: #969696;
      color: #fff;
    }
    .delBtn {
      background: #d74949;
      color: #fff;
    }
  }

  // modalStyle
  .overlay {
    z-index: 98;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    z-index: 99;
    position: absolute;
    width: 500px;
    max-height: 100%;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    .modalTitle {
      width: 100%;
      display: block;
      height: 50px;
      background: #d13030;
      color: #fff;
      line-height: 50px;
      font-weight: 600;
      font-size: 20px;
      text-indent: 20px;
      .modal-close {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 50px;
        color: #fff;
        font-size: 20px;
      }
    }
  }

  .modal-body {
    padding: 30px;
    background-color: white;
    .menuImg {
      text-align: center;
      overflow: hidden;
      img {
        max-width: 100%;
        transition: all 0.5s ease-in-out;
      }
    }
    .menuInfo {
      padding: 20px;
      p {
        display: block;
        line-height: 30px;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        padding-top: 10px;
      }
      .menuPrice {
        font-weight: 600;
        color: #d74949;
      }
    }
  }

  // pagingStyle
  .pagination {
    overflow: hidden;
    margin: 50px auto 0;
    width: 100px;
    li {
      float: left;
      margin-left: 10px;
      &:first-of-type {
        margin-left: 0;
      }
      button {
        background: #fff;
        cursor: pointer;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #ccc;
        &:hover {
          font-weight: 600;
        }
      }
    }
  }
`;

export default ProductsListStyle;
