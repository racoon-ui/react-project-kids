import React from 'react';

export const CheckLogin = (props) => {
  const token = localStorage.getItem('token');
  console.log(token);
  return <>{token ? props.children : props.children}</>;
};
