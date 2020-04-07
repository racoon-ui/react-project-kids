import React from 'react';
import store from 'store';
import { Redirect } from 'react-router-dom';

export const getToken = () => {
  return store.get('token');
};

export const getEmail = () => {
  return store.get('email');
};

export const isLogin = () => {
  if (getToken()) {
    return true;
  }
  return false;
};

export const onLogout = () => {
  store.remove('token');
  store.remove('name');
  return <Redirect to="/" />;
};
