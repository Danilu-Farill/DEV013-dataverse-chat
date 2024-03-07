import { Header } from "../src/components/Header.js";
import { Button } from "../src/components/Button.js";

describe("Elementos que interactúan con el DOM", () => {
  const routerFalse = require("../src/router")
  const spyOn = jest.spyOn(routerFalse, 'navigateTo')
  spyOn.mockImplementation((pathname) => {
    history.pushState({}, "", pathname);
  })

  it("El botón debería enviarnos a otro pathname", () => {
    document.body.appendChild(Button())
    const buttonBack = document.querySelector(".buttonBack")
    buttonBack.click()
    expect(window.location.pathname).toBe("/home")
  })

  it("El link del navbar debería enviarnos a el pathname stats", () => {
    document.body.appendChild(Header());
    document.querySelector("#stats").click()
    expect(window.location.pathname).toBe("/stats")
  })

  it("El link del navbar debería enviarnos a otro pathname API", () => {
    document.body.appendChild(Header());
    document.querySelector("#api").click()
    expect(window.location.pathname).toBe("/api")
  })

  it("El link del navbar debería enviarnos a el pathname home", () => {
    document.body.appendChild(Header());
    document.querySelector("#home").click()
    expect(window.location.pathname).toBe("/home")
  })

  it("El link del navbar debería enviarnos a el pathname error", () => {
    document.body.appendChild(Header());
    document.querySelector("#about-us").click()
    expect(window.location.pathname).toBe("/error")
  })
})

