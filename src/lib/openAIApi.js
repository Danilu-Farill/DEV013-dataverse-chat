import { getApiKey } from "./apiKey.js";

/* global axios*/

const api_key = getApiKey();

export const communicateWithOpenAI = async (systemMessages, userMessages) => {
  try {
    const response = await axios ({
      method: "POST",
      url: "https://api.openai.com/v1/chat/completions",
      headers:
      {
        Authorization: "Bearer " + api_key,
      },
      data: {
        messages: [{
          role: "system",
          content:`Eres un vecino de animal crossing, ${systemMessages} Manten tus respuestas cortas`,
        },
        {
          role: "user",
          content: userMessages
        }],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      }
    })
    return response;

  } catch (error) {
    return "error"
  }
};


















//get traer información(consultar la api)
//post: crear información(crear una publicación, en la base de datos)
//JSON si la api necesita alguna información tuya, 
//la api se comunca con protocolo http, reglas de comunicación entre servidor y cliente
//urlsearchparams usa get pasar información
//get usa el chat individual
//fetch es una herramienta para hacer consulta http de JS (consumir API)no importa si es mayuscula(GET)
//mejor axios es libreria externa
//url le esta diciendo a la api que va a usar la data de page 2
// const apiURL = "https://api.openai.com/v1/chat/completions";
//"Authorization: Bearer  \
//"OpenAI-Organization: org-XOneVeSuuHzIh2SaHYxTp3qZ"
// //let dataOpenAi = JSON.stringify({
//   "model": "gpt-3.5-turbo",
//   "messages": [{"role": "system", 
//     "content": `Tu eres ${data[0]}`}],
//   "temperature": 0.7
// })/**//* global axios*/
// console.log("🚀 ~ communicateWithOpenAI ~ dataOpenAi:", dataOpenAi)




//encabezado url, carga útil, si fue exitoso(respuesta), si da error interpretar system
//llava temperatura, message, content(promp), system, user,
/*
  role": "assistant"
  "role": "assistant",
  "content": "\n\nHello there, how may I assist you today?",(input.value)      messages: [{ role: "system", content: "You are a helpful assistant." }],
       */
//token (250)

/*
async function promises {
  const = await
}
*/






// let procesoLento = new Promise((resolve, reject) => {
//   let datos = {};
//   //...
//   //muchas lineas de código
//   //...
//   if (error) {
//     //uh oh, las cosas no salieron tan bien
//     reject(new Error('Fallamos, lo siento'));
//   }
//   //...
//   resolve(datos);
// });


// let promises = new Promise((resolved, rejected) => {
//   let expression = true;
//   if(expression){
//       resolved("se resolvio correctamente");
//   }else {
//       rejected("se produjo un error");
//   }
// });
// //en then() dentro van 2 parámetros, funciones tipo flecha
// /*
// promises.then(
//   value => console.log(value),
//   error => console.error(error)
// )
// */

// //otra forma de ejecutarlo con catch()
// promises.then(
//   value => console.log(value))
//   .catch(error => console.error(error)
// )


