export const saveLocal = (ten, data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem(ten, newData);
};
export const getLocal = (ten) => {
  const value = localStorage.getItem(ten);
  return JSON.parse(value) ? JSON.parse(value) : [];
};
