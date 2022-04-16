const getVar = (key) => {
  // eslint-disable-next-line no-undef
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  // eslint-disable-next-line no-undef
  return process.env[key];
};

export const API_URL = getVar('REACT_APP_API_URL');
