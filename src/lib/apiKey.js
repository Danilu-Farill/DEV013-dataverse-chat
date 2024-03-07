export const getApiKey = () => {
  const getStorage = localStorage.getItem("llave");
  return getStorage;
};

export const setApiKey = (apiKey) => {
  localStorage.setItem("llave", apiKey);
};

export const removeApiKey = () => {
  localStorage.clear(window.localStorage);
}



export const getUserName = () => {
  const getStorage = localStorage.getItem("usuario");
  return getStorage;
};

export const setUserName = (username) => {
  localStorage.setItem("usuario", username);
};


