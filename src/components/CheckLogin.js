import React from 'react';
import store from 'store';

export const CheckLogin = props => {
  const token = store.get('token');
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
