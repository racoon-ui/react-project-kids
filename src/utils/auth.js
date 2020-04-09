import React from 'react';
import store from 'store';
import { Redirect } from 'react-router-dom';

export const getToken = () => {
  return store.get('token');
};

export const getEmail = () => {
  return store.get('id');
};

export const isLogin = () => {
  if (getToken()) {
    return true;
  }
  return false;
};

export const onLogout = () => {
  store.remove('token');
  store.remove('id');
  return <Redirect to="/" />;
};
