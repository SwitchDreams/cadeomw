export const setToLS = (key: string, value: any): number => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return 0;
};

export const getFromLS = (key: string): any => {
  const value = window.localStorage.getItem(key);

  if (value) return JSON.parse(value);
  return 0;
};
