import { Footer } from "./../components/Footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "./../data/dataset.js";
import { SecondaryHeader } from "../components/SecondaryHeader.js";

export const GroupalChat = () => {
  const divMain = document.createElement("div");
  const main = document.createElement("main");
  const divImageFaces = document.createElement("div");
  data.forEach((element) => {
    const imageFaces = document.createElement("img");
    imageFaces.setAttribute("src", element.imageUrlFace);
    imageFaces.setAttribute("alt", element.name);
    divImageFaces.appendChild(imageFaces);
  });
  main.innerHTML = `
  <div class="containerGroupal">
  <div class="containerGroupal__Chat">
  <div class="containeGroupal__chat__header">
        <p class="page">CHAT GRUPAL</p>
      </div>
      <div class="containerGroupal__chat__screen">
      <div class="containerGroupal__chat__inputSend"> 
        <input type="text" class="inputGroupal" placeholder="Platica con nosotros"> <i class='bx bxs-send'></i>
      </div>
      </div>
   </div>
  <div class="containerGroupal__Users">
    <div class="containerGroupal__Users__header">
      <p>PARTICIPANTES </p>
    </div> ${divImageFaces.innerHTML}</div>
  </div> `;

  divMain.append(SecondaryHeader(), main, Footer());
  const sendButton = main.querySelector(".bxs-send");
  const inputUsers = main.querySelector(".inputGroupal");
  const messageContainer = main.querySelector(".containerGroupal__chat__screen");

  sendButton.addEventListener("click", () => {
    const userInputValue = inputUsers.value;
    if (userInputValue !== "") {
      const userAnswer = document.createElement("div");
      userAnswer.className = "user-txt-container user-txt";
      userAnswer.innerHTML = userInputValue;

      data.forEach(async (element) => {
       
        const message = document.createElement("div");
        message.className = "system-txt-container";

        const openAiResponse = await communicateWithOpenAI(element.description, userInputValue);
        message.innerHTML = `
        <img class="face" src=${element.imageUrlFace} alt=${element.name}>
        <div class="system-txt systemTop">${openAiResponse.data.choices[0].message.content}</div>`
        messageContainer.append(message);
      
      })
      messageContainer.append(userAnswer)
      inputUsers.value = "";
    }
  })

  return divMain;
};