import { Cards } from "./Cards.js";
import data from "../data/dataset.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import { getApiKey } from "../lib/apiKey.js";

export const SectionHome = () => {
  const main = document.createElement("main");
  const section = document.createElement("section");
  const aside = document.createElement("aside");
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "iconChat";
  aside.className = "asideFilter";
  aside.innerHTML = `
      <div data-testid="select-filterGender" name="gender">
        <label for="filter"><h2>Género</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionOne" id="genderMasculine" value="Masculino">
              <label for="genderMasculine">Masculino</label> 
            </li>
            <li>
              <input type="radio" name="optionOne" id="genderWomen" value="Femenino">
              <label for="genderWomen">Femenino</label> 
            </li>
          </ul>
        </div>
        <hr/>
        <div data-testid="select-filter" name="species">
          <label for="filterForSpecies"><h2>Especie</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionTwo" id="specieTiger" value="Tigre">
              <label for="specieTiger">Tigre</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDog" value="Perro">
              <label for="specieDog">Perro</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieSquirrel" value="Ardilla">
              <label for="specieSquirrel">Ardilla</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieChicken" value="Gallo">
              <label for="specieChicken">Gallo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieMouse" value="Raton">
              <label for="specieMouse">Ratón</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieWolf" value="Lobo">
              <label for="specieWolf">Lobo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDeer" value="Ciervo">
              <label for="specieDeer">Ciervo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDuck" value="Pato">
              <label for="specieDuck">Pato</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieCat" value="Gato">
              <label for="specieCat">Gato</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieGoat" value="Cabra">
              <label for="specieGoat">Cabra</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieBear" value="Oso">
              <label for="specieBear">Oso</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieEagle" value="Águila">
              <label for="specieEagle">Águila</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieHorse" value="Caballo">
              <label for="specieHorse">Caballo</label> 
            </li>
          </ul>
        </div>   
        <hr/>
        <div data-testid="select-filterPersonality" name="personality">
          <label for="filterForPersonality"><h2>Personalidad</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionThree" id="personalityJock" value="Deportista">
              <label for="personalityJock">Deportista</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityCranky" value="Gruñon">
              <label for="personalityCranky">Gruñón</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityLazy" value="Perezoso">
              <label for="personalityLazy">Perezoso</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySmug" value="Esnob">
              <label for="personalitySmug">Esnob</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySweet" value="Dulce">
              <label for="personalitySweet">Dulce</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityPeppy" value="Vivaracha">
              <label for="personalityPeppy">Vivaracha</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySnooty" value="Altanera">
              <label for="personalitySnooty">Altanera</label>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <button class="btn-clear" type="button" data-testid="button-clear">
                Limpiar filtros
              </button>
      </div>
    `;
  section.innerHTML = `
    <div class="container">
      <div class="buscador">
        <h2>Lista de vecinos</h2>
          <div>
            <label for="sort">Ordenar por:</label>
            <select name="sort" id="sort" data-testid="select-sort">
              <option value="all">Elige una opción</option>
              <option value="asc">Ordenar de la A-Z</option>
              <option value="desc">Ordenar de la Z-A</option>
            </select>
            <label for="sorthidden" hidden>Ordenar por:</label>
            <select name="sort" id="sorthidden" hidden></select>
            <input type="text" id="searchAnimal" placeholder="Buscar vecino"/>
            <button class="btn-clear-search" data-testid="button-clearName">
              Limpiar
            </button>
          </div>
      </div>
      <div id="content"></div>
    </div>
    `;
  buttonDiv.innerHTML = `
    <button class="container-ico"> <img src="./images/logo-wechat_1.png" name="logo-wechat"></button> `;

  const content = section.querySelector("#content");
  content.appendChild(Cards(data));
  const order = section.querySelector('[data-testid="select-sort"]');
  const filterGender = aside.querySelector('[data-testid="select-filterGender"]');
  const filterSpecies = aside.querySelector('[data-testid="select-filter"]');
  const filterPersonality = aside.querySelector('[data-testid="select-filterPersonality"]');
  const buttonClearFilter = aside.querySelector('[data-testid="button-clear"]');
  const inputSearchAnimal = section.querySelector("#searchAnimal");
  const buttonClearName = section.querySelector('[data-testid="button-clearName"]');
  const iconChat = buttonDiv.querySelector('[name="logo-wechat"]');
  let filteredData;
  Cards(data);
  filteredData = [...data];

  buttonClearFilter.addEventListener("click", () => {
    content.innerHTML = "";
    filteredData = [...data];
    order.selectedIndex = 0;
    const radioButton = document.querySelectorAll('input[type="radio"]');
    radioButton.forEach((item) => (item.checked = false));
    content.appendChild(Cards(filteredData));
  });

  order.addEventListener("change", (e) => {
    content.textContent = "";
    filteredData = sortData(filteredData, "name", e.target.value);
    content.appendChild(Cards(filteredData));
  });

  filterGender.addEventListener("click", (event) => {
    if (!event.target.value) {
      return;
    }
    content.innerHTML = "";
    filteredData = filterData(filteredData, "gender", event.target.value);
    content.appendChild(Cards(filteredData));
  });

  filterPersonality.addEventListener("click", (event) => {
    if (!event.target.value) {
      return;
    }
    content.innerHTML = "";
    filteredData = filterData(filteredData, "personality", event.target.value);
    content.appendChild(Cards(filteredData));
  });

  filterSpecies.addEventListener("click", (event) => {
    if (!event.target.value) {
      return;
    }
    content.innerHTML = "";
    filteredData = filterData(filteredData, "species", event.target.value);
    content.appendChild(Cards(filteredData));
  });

  const filterSearchNames = () => {
    content.innerHTML = "";
    const dataNames = inputSearchAnimal.value.toLowerCase();
    const filterNames = filteredData.filter((item) =>
      item.name.toLowerCase().includes(dataNames)
    );
    content.appendChild(Cards(filterNames));
  };
  inputSearchAnimal.addEventListener("keydown", filterSearchNames);

  buttonClearName.addEventListener("click", function (e) {
    e.target.value = inputSearchAnimal.value = "";
    content.innerHTML = "";
    content.appendChild(Cards(filteredData));
  });

  iconChat.addEventListener("click", () => {
    if(getApiKey()) {
      navigateTo("/groupal", {})
    } else {
      navigateTo("/api");
    }
  });

  main.append(aside, section, buttonDiv);
  return main;
};

