import { navigateTo } from "../router.js";

export const Button = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <ion-icon name="close-outline" class="buttonBack"></ion-icon>`;
  container.querySelector(".buttonBack").addEventListener("click", () => {
    navigateTo("/home", {});
  });
  return container; 
};