import { Home } from "./views/Home.js";
import { StartingScreen } from "./views/StartingScreen.js";
import { GroupalChat } from "./views/GroupalChat.js";
import { IndividualChat } from "./views/IndividualChat.js";
import { Stats } from "./views/Stats.js";
import { Api } from "./views/Api.js";
import { Error } from "./views/Error.js";
import { onURLChange, setRootEl, setRoutes } from "./router.js";

const routes = {
  "/": StartingScreen,
  "/home": Home,
  "/groupal": GroupalChat,
  "/individual": IndividualChat,
  "/api": Api,
  "/error": Error,
  "/stats": Stats
};

const root = document.getElementById("root");
setRoutes(routes);
setRootEl(root);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

window.addEventListener("popstate", (event) => {
  onURLChange(event.target.location.pathname);
});

