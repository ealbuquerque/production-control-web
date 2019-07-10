import React from 'react';
import {
  toast,
  ToastContainer as Container,
} from 'react-toastify';

const TOAST_DEFAULT = 'default';
const TOAST_ERROR = 'error';
const TOAST_SUCCESS = 'success';
const TOAST_WARNING = 'warning';

const ToastContainer = () => {
  const toastAutoCloseTimeout = process.env.REACT_APP__TOAST_TIMEOUT || 3000;
  
  return (
    <Container
      autoClose={toastAutoCloseTimeout}
      closeOnClick
      hideProgressBar
      newestOnTop={false}
      pauseOnHover
      position="top-center"
    />
  );
};

const toastMessage = (message, type = TOAST_DEFAULT) => toast(message, { type });

export {
  ToastContainer as default,
  TOAST_DEFAULT,
  TOAST_ERROR,
  toastMessage,
  TOAST_SUCCESS,
  TOAST_WARNING,
};

