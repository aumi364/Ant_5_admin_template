export const prefixCode =
  import.meta.env.VITE_APP_ENVIRONMENT === 'development' ? '+880' : '+46';
export const addPhoneNumberPrefix = number => {
  return `${prefixCode}${number}`;
};
