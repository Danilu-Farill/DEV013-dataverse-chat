import { navigateTo } from "../router.js";
import { getApiKey } from "../lib/apiKey.js";

export const Cards = (data) => {
  const listUl = document.createElement("ul");
  data.forEach((element) => {
    const listLi = document.createElement("li");
    listUl.appendChild(listLi);
    listLi.setAttribute('itemscope', '');
    listLi.setAttribute('itemtype', 'https://schema.org/Game');
    listLi.className = "cardList";
    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.classList.add(`card${element.personality}`)
    divCard.innerHTML = `
    <dl>
    <div class="headerCard">
    <dt>Genero</dt><dd itemprop="gender" class= ${element.gender === "Femenino" ? "genderFemale" : "genderMale"}></dd>
    <dt>Signo</dt><dd itemprop="zodiacSign" class=${element.facts.zodiacSign}></dd>
    </div>
    <div class="bodyCard" data-img-one="${element.imageUrl}" data-img-one="${element.imageUrlFace}">
      <img class="imgHoverOut" src= ${element.imageUrl} alt=${element.name}>
      <img class="imgHoverIn" hidden src= ${element.imageUrlFace} alt=${element.name}>
    </dd>
    </div>
    <div class="footerCard">
      <div class="information">
        <dt>Especie</dt><dd itemprop="species" >${element.species}</dd>
        <dt>Nombre</dt><dd itemprop="name">${element.name}</dd>
        <dt>Personalidad</dt><dd  itemprop="personality" >${element.personality.length > 5 ? element.personality.substring(0, 5) + ".." : element.personality}</dd>
      </div>
    <div class="date">
    <img src="./images/Pastel de cumple.png" alt="cake"/>
    <dt>Cumpleaños</dt><dd itemprop="birthDate">${element.facts.birthDate}</dd>
    </div>
    </div>
    </dl>
    `;

    divCard.querySelector('.bodyCard').addEventListener('mouseover', cardHover)
    divCard.querySelector('.bodyCard').addEventListener('mouseout', cardHover)
    listLi.append(divCard);
   
    function cardHover(e) {
      if (e.type === "mouseover") {
        divCard.querySelector('.imgHoverOut').style.display = 'none'
        divCard.querySelector('.imgHoverIn').style.display = 'block'
      } else {
        divCard.querySelector('.imgHoverOut').style.display = 'block'
        divCard.querySelector('.imgHoverIn').style.display = 'none'
      }
    }

    listLi.addEventListener("click", () => {
      if(getApiKey()){
        navigateTo(`/individual?id=${element.id}`);
      } 
      else {
        navigateTo("/api", {});
      }
    });
    
  });


  return listUl;
};
