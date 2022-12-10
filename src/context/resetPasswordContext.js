import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { setStorage } from '../store/storage/storage';

export const resetPasswordPage = {
  requestOtp: 'request-otp',
  verifyOtp: 'verify-otp',
  confirmPassword: 'confirm-password',
  success: 'success',
};

const ResetPasswordContext = createContext({
  values: {
    page: resetPasswordPage.requestOtp,
    otpCreatedAt: '',
    phoneNumber: '',
    otp: '',
  },
});

export const dispatchType = {
  page: 'page',
  otpCreatedAt: 'otpCreatedAt',
  phoneNumber: 'phoneNumber',
  reset: 'reset',
  otp: 'otp',
};
export const ResetPasswordProvider = ({
  page,
  children,
  otpCreatedAt,
  phoneNumber,
  otp,
  dispatch,
}) => {
  useEffect(() => {
    setStorage('otpInfo', {
      page: page,
      phoneNumber: phoneNumber,
      otpCreatedAt: otpCreatedAt,
      otp: otp,
    });
  }, [page, phoneNumber, otp, otpCreatedAt]);

  return (
    <ResetPasswordContext.Provider
      value={{
        values: { page, otpCreatedAt, phoneNumber, otp },
        dispatch: dispatch,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};

ResetPasswordProvider.propTypes = {
  page: PropTypes.string,
  children: PropTypes.element,
  otpCreatedAt: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default ResetPasswordContext;
