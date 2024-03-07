import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { SectionHome } from "../components/SectionHome.js";

export const Home = () => {
  const container = document.createElement("div");
  container.append(Header(), SectionHome(), Footer());

  return container;
};
