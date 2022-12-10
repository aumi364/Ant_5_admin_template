import React, { useReducer } from 'react';
import {
  dispatchType,
  resetPasswordPage,
  ResetPasswordProvider,
} from '../../../context/resetPasswordContext';
import RequestOtp from './requestOtp';
import VerifyOtp from './verifyOtp';
import ConfirmPassword from './confirmPassword';
import { getStorage } from '../../../store/storage/storage';
import Success from './Success';

const ResetPassword = () => {
  const persistedValues = getStorage('otpInfo');

  const initialState = {
    page: resetPasswordPage.requestOtp,
    otpCreatedAt: '',
    phoneNumber: '',
    otp: '',
  };

  const [resetPasswordState, dispatch] = useReducer(
    reducer,
    persistedValues ?? initialState,
  );

  function reducer(state, action) {
    switch (action.type) {
      case dispatchType.page:
        return { ...state, page: action.payload };
      case dispatchType.otpCreatedAt:
        return { ...state, otpCreatedAt: action.payload };
      case dispatchType.phoneNumber:
        return { ...state, phoneNumber: action.payload };
      case dispatchType.otp:
        return { ...state, otp: action.payload };
      case dispatchType.reset:
        return initialState;
      default:
        throw new Error();
    }
  }
  function generatePage(page) {
    switch (page) {
      case resetPasswordPage.requestOtp:
        return <RequestOtp />;
      case resetPasswordPage.verifyOtp:
        return <VerifyOtp />;
      case resetPasswordPage.confirmPassword:
        return <ConfirmPassword />;
      case resetPasswordPage.success:
        return <Success />;
      default:
        return <RequestOtp />;
    }
  }

  return (
    <ResetPasswordProvider
      page={resetPasswordState.page}
      otpCreatedAt={resetPasswordState.otpCreatedAt}
      phoneNumber={resetPasswordState.phoneNumber}
      otp={resetPasswordState.otp}
      dispatch={dispatch}
    >
      {generatePage(resetPasswordState.page)}
    </ResetPasswordProvider>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
