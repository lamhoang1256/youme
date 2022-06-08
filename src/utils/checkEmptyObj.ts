export const checkEmptyObj = (obj: any) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return true;
  return false;
};
