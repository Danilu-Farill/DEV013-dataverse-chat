import {Button} from "./../components/Button.js";
import { Footer } from "./../components/Footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "./../data/dataset.js";

export const GroupalChat = () => {
  const divMain = document.createElement("div");
  const main = document.createElement("main");
  const divImageFaces = document.createElement("div");
  data.forEach((element) => {
    const imageFaces = document.createElement("img");
    imageFaces.setAttribute("src", element.imageUrlFace); 
    imageFaces.setAttribute("alt",  element.name);
    divImageFaces.appendChild(imageFaces); 
  }); 
  main.innerHTML = `
  <div class="containerGroupal">
    <div class="containerGroupal__Chat">
      <div class="containeGroupal__chat__header">
        <img src="./images/avatar-group.png" alt="logoGroupal" class="imgGroupal">
        <p>CHAT GRUPAL</p>
      </div>
      <div class="containerGroupal__chat__screen"></div>
      <div class="nameIsWrite hide">esta escribiendo...</div>
      <div class="containerGroupal__chat__inputSend"> 
        <input type="text" class="inputGroupal" placeholder="Platica con nosotros"> <i class='bx bxs-send'></i>
      </div>
   </div>
  <div class="containerGroupal__Users">
    <div class="containerGroupal__Users__header">
      <p>PARTICIPANTES </p>
    </div>
    ${divImageFaces.innerHTML}
    </div>
  </div> `;
  //const faceGroupal = main.querySelector(".faceGroupal");
  divMain.append(Button(), main, Footer());

  const nameWrite = main.querySelector(".nameIsWrite");
  const sendButton = main.querySelector(".bxs-send");
  const inputUsers = main.querySelector(".inputGroupal"); 
  const messageContainer = main.querySelector(".containerGroupal__chat__screen");

  sendButton.addEventListener("click", () => {
    //1.Importar la data
    //2.Ejecutar la data por cada vecino
    //3.Hacer append de las respuesta 
    //NO PODEMOS PERMITIR QUE SE EJECUTE LA FUNCION SI EL INPUT ESTA VACIO
    //Overflow en el contenedor de los mensajes
      
    const userInputValue = inputUsers.value;
    const userAnswer = document.createElement("div");
    userAnswer.className = "user-txt"
    userAnswer.innerHTML = userInputValue;
    data.forEach( async (element) => {
      nameWrite.classList.remove("hide");//para esconder el esta escribien    
      nameWrite.classList.add("show" );
      const message = document.createElement("div");
      message.className = "system-txt";
      const openAiResponse = await communicateWithOpenAI(element.description, userInputValue);
      message.innerHTML = openAiResponse.data.choices[0].message.content;
      messageContainer.append(message)
      nameWrite.classList.add("hide");
      nameWrite.classList.remove("show");
    })
    messageContainer.append(userAnswer)
    inputUsers.value = "";
  })

  return divMain;
};
