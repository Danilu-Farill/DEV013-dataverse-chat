let ROUTES = {};
let rootElement = "";

export const setRootEl = (newRoot) => {
  rootElement = newRoot;
};

export const setRoutes = (newRoutes) => {
  if (typeof newRoutes === "object") {
    if (newRoutes["/error"]) {
      ROUTES = newRoutes;
    }
  }
};

export const queryStringToObject = (queryString) => {
  const urlProps = new URLSearchParams(queryString);
  const finalObject = Object.fromEntries(urlProps.entries());

  return finalObject;
  
};

const renderView = (pathname, props = {}) => {
  const cleanRoot = rootElement;
  cleanRoot.innerHTML = "";
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    cleanRoot.appendChild(template);
  } else {
    cleanRoot.appendChild(ROUTES["/error"]());
  }
};

export const navigateTo = (pathname, props = {}) => {
  history.pushState({}, "", pathname);
  const splitPathname = pathname.split("?");
  props = splitPathname[1];
  pathname = splitPathname[0];
  const objectProps = queryStringToObject(props);

  renderView(pathname, objectProps);
};

export const onURLChange = (pathname) => {
  const searchURL = window.location.search;
  
  const objectProps = queryStringToObject(searchURL);
  renderView(pathname, objectProps);
};

