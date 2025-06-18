export const createError = (code, msg) => {
  //code body
  const error = new Error(msg);
  //add property into our object
  error.code = code;
  throw error;
};
