import { SecondaryHeader } from "../components/SecondaryHeader.js";
import { setApiKey, removeApiKey, getApiKey, setUserName } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

export const Api = () => {
  const container = document.createElement("div");
  const apiPage = document.createElement("main");
  apiPage.innerHTML = `
  <form name="register">
    <div class="container__ApiUser">
    <label for="userName">USUARIO </label>
    <div class="container__ApiUser__text">
    <input type="text id="userName" class="userName" placeholder="Margarita" required>
    </div>
    </div>
    <div class="container__keyApi">
    <label for="api-key">CLAVE API </label>
    <div class="container__keyApi__hidden">
    <input type="password" id="api-key" class="api__key" placeholder="sk-4Ktb2qBVRLb.........QVm">
    <i class='bx bx-show'></i> 
    </div>
    <p class="textKeyApi">¿Qué es una llave API? <a href="https://aws.amazon.com/es/what-is/api-key/" target="_blank"> Información</a> ¿No cuentas con tu API? Puedes generarla <a href="https://platform.openai.com/api-keys" target="_blank">aquí</a><p>
    </div>
    <input class="buttonApiSave show" type="submit" value="SAVE API KEY">
    <input class="buttonApiDelete hide" type="submit" value="DELETE API KEY">
    </div>
  </form>
    `;
  const apiKeyInput = apiPage.querySelector("#api-key");
  const apiKeyPass = apiPage.querySelector(".api__key"); 
  const iconSHow = apiPage.querySelector(".bx"); 
  iconSHow.addEventListener("click", () => {
    if (apiKeyPass.type === "password") {
      apiKeyPass.type = "text";
      iconSHow.classList.remove("bx-show");
      iconSHow.classList.add("bx-hide");
    } else {
      apiKeyPass.type = "password";
      iconSHow.classList.add("bx-hide");
      iconSHow.classList.remove("bx-show");
    }
  });

  const buttonSave = apiPage.querySelector(".buttonApiSave");
  const buttonDelete = apiPage.querySelector(".buttonApiDelete");
  const requiredInputName = apiPage.querySelector(".userName"); 
  buttonSave.addEventListener("click", (event) => {
    
    event.preventDefault();
    if (requiredInputName.value === "" || apiKeyInput.value === "") {
      alert("Coloca tu nombre y llave");
      return;
    }
    if (apiKeyInput.value.length < 30) {
      alert("API key no valida");
      return;
    }
    buttonSave.classList.remove("show");
    buttonSave.classList.add("hide");
    buttonDelete.classList.remove("hide");
    buttonDelete.classList.add("show");
    
    const userNameValue = requiredInputName.value;
    setUserName(userNameValue);
    setApiKey(apiKeyInput.value);
    navigateTo("/home");
  });
  if (getApiKey()) {
    buttonSave.classList.remove("show");
    buttonSave.classList.add("hide");
    buttonDelete.classList.remove("hide");
    buttonDelete.classList.add("show");
  }

  buttonDelete.addEventListener("click", () => {
    buttonSave.classList.remove("hide");
    buttonSave.classList.add("show");
    buttonDelete.classList.remove("show");
    buttonDelete.classList.add("hide");
    removeApiKey();
  });

  container.append(SecondaryHeader(), apiPage);
  return container;
};

