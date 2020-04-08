import React from 'react';
import { isLogin } from '../utils/auth';

export const CheckLogin = (props) => {

  let loginDiv, logoutDiv;

  if (props.login) {
    loginDiv = props.children;
  } else if (props.logout) {
    logoutDiv = props.children;
  }

  if (isLogin()) {
    return <>{loginDiv}</>;
  } else if (!isLogin()) {
    return <>{logoutDiv}</>;
  }

};
