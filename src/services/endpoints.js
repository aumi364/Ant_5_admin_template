export const rootUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const apiVersion = {
  v1: 'v1',
};
export const baseApiUrl = `${rootUrl}/`;

export const loginUrl = `${apiVersion.v1}/authentication/token/`;
export const loginUrlWithCookie = `${apiVersion.v1}/authentication/cookie/token/`;
export const resetPassword = `${apiVersion.v1}/authentication/reset-password/`;
export const verifyOtp = `${apiVersion.v1}/authentication/verify-otp/`;
export const requestOtp = `${apiVersion.v1}/authentication/request-otp/`;
export const users = `${apiVersion.v1}/users/`;
