export const setStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};
