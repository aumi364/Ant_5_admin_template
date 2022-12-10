import { useMutation } from 'react-query';
import http from '../https';
import * as endpoints from '../endpoints';

export const loginReq = async data => {
  const response = await http.post(`${endpoints.loginUrl}`, data, {
    // withCredentials: true,
  });
  return response?.data;
};

export const resetPassword = async data => {
  const response = await http.post(`${endpoints.resetPassword}`, data);
  return response?.data;
};

export const verifyOtp = async data => {
  const response = await http.post(`${endpoints.verifyOtp}`, data);
  return response?.data;
};

export const requestOtp = async data => {
  const response = await http.post(`${endpoints.requestOtp}`, data);
  return response?.data;
};

export const useLoginMutation = () => useMutation(loginReq);
export const useVerifyOtpMutation = () => useMutation(verifyOtp);
export const useRequestOtpMutation = () => useMutation(requestOtp);
export const useResetPasswordMutation = () => useMutation(resetPassword);
