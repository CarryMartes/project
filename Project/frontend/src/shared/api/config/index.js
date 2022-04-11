const getVar = (key) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key];
};

export const API_URL = getVar('REACT_APP_API_URL');
