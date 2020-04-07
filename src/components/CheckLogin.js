import React from 'react';
import { getToken } from '../utils/auth';

export const CheckLogin = (props) => {
  const token = getToken();
  let loginDiv, logoutDiv;

  if (props.login) {
    loginDiv = props.children;
  } else if (props.logout) {
    logoutDiv = props.children;
  }

  if (token) {
    return <>{loginDiv}</>;
  } else if (!token) {
    return <>{logoutDiv}</>;
  }
};
