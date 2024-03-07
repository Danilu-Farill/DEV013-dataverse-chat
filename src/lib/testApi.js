// /* global axios */

const axios = require("axios");
const api_key = "";

export const fakeCommunicateWithOpenAI = async (systemMessages, userMessages) => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", [
      {
        messages: [
          {
            role: "system",
            content: `Eres un vecino de animal crossing, ${systemMessages} Manten tus respuestas cortas`,
          },
          {
            role: "user",
            content: userMessages,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      },
      {
        headers: { Authorization: "Bearer " + api_key },
      },
    ]);
    return response.data.choices[0].message.content;
  } catch (error) {
    return "error";
  }
};


