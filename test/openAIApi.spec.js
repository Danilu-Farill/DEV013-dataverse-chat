import { fakeCommunicateWithOpenAI } from "./../src/lib/testApi.js";
const axios = require("axios");
jest.mock("axios");

describe("communicateWithOpenAI", () => {
  test("Debería devolvernos una respuesta del API en string", async () => {
    const res = {
      index: 0,
      message: {
        role: "assistant",
        content: "Este es un mensaje del sistema",
      },
      "logprobs": null,
      "finish_reason": "stop"
    };
    axios.post.mockResolvedValue({data:{
      id: "chatcmpl-8yNGMTanQsypIJk8baRF1Jy8FRmjw",
      object: "chat.completion",
      created: 1709399794,
      model: "gpt-3.5-turbo-0125",
      choices: [res],
      "usage": {
        "prompt_tokens": 168,
        "completion_tokens": 17,
        "total_tokens": 185
      },
      "system_fingerprint": "fp_2b778c6b35"
    }});

    const result = await fakeCommunicateWithOpenAI();
    expect(result).toMatch("Este es un mensaje del sistema");
  });

  test("Debería devolvernos un error", async () => {
    const res = {
      index: 0,
      message: {
        role: "assistant",
        content:"",
      },
      "logprobs": null,
      "finish_reason": "stop"
    };
    axios.post.mockResolvedValue({data:{
      id: "chatcmpl-8yNGMTanQsypIJk8baRF1Jy8FRmjw",
      object: "chat.completion",
      created: 1709399794,
      model: "gpt-3.5-turbo-0125",
      choices: [res],
      "usage": {
        "prompt_tokens": 228,
        "completion_tokens": 57,
        "total_tokens": 185
      },
      "system_fingerprint": "fp_2b778c6b35"
    }});

    const result = await fakeCommunicateWithOpenAI();
    expect(result).not.toMatch("Este es un mensaje del sistema");
  });
});
