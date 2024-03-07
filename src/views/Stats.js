import { Header } from "../components/Header.js";
import { computeStats } from "../lib/dataFunctions.js";
import { Footer } from "../components/Footer.js"
import data from "../data/dataset.js";
/*global google*/

export const Stats = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.setAttribute("class", "stats-main");
  main.innerHTML = `
  <div class="graphic-container">
    <div>
        <h2 style="text-align: center">Genero de los vecinos</h2>
        <div class="chartContainer" style="width: 620px; height: 500px;"></div>
    </div>
    <div>
        <h2 style="text-align: center">Personalidad de los vecinos</h2>
        <div class="chartContainer2" style="width: 620px; height: 500px;"></div>
    </div>
    <div>
        <h2 style="text-align: center">Especie de los vecinos</h2>
        <div class="chartContainer3" style="width: 620px; height: 500px;"></div>
    </div>
</div>
  `;

  
  renderChartGender(main);
  renderChartPersonality(main);
  renderChartSpecies(main);

  container.append(Header(), main, Footer());

  return container;
};

const renderChartGender = (element) => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const stats = computeStats(data, "gender");

    const googleData = google.visualization.arrayToDataTable([
      ["Element", "Value"],
      ["Masculino", stats.Masculino],
      ["Femenino", stats.Femenino],
    ]);

    const options = {
      backgroundColor: "#f7f3e7",
      fontSize: 16,
      colors: ["#36A2EB", "#FF6384"],
    };

    const chart = new google.visualization.PieChart(
      element.querySelector(".chartContainer")
    );
    chart.draw(googleData, options);
  }
};

const renderChartPersonality = (element) => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const stats = computeStats(data, "personality");

    const googleData = google.visualization.arrayToDataTable([
      ["Element", "Value"],
      ["Altanera", stats.Altanera],
      ["Deportista", stats.Deportista],
      ["Dulce", stats.Dulce],
      ["Esnob", stats.Esnob],
      ["Gruñon", stats.Gruñon],
      ["Perezoso", stats.Perezoso],
      ["Vivaracha", stats.Vivaracha],
    ]);

    const options = {
      fontSize: 16,
      backgroundColor: "#f7f3e7",
      colors: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
      ],
    };

    const chart = new google.visualization.PieChart(
      element.querySelector(".chartContainer2")
    );
    chart.draw(googleData, options);
  }
};

const renderChartSpecies = (element) => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const stats = computeStats(data, "species");

    const googleData = google.visualization.arrayToDataTable([
      ["Element", "Value"],
      ["Ardilla", stats.Ardilla],
      ["Caballo", stats.Caballo],
      ["Cabra", stats.Cabra],
      ["Ciervo", stats.Ciervo],
      ["Gallo", stats.Gallo],
      ["Gato", stats.Gato],
      ["Lobo", stats.Lobo],
      ["Oso", stats.Oso],
      ["Pato", stats.Pato],
      ["Perro", stats.Perro],
      ["Raton", stats.Raton],
      ["Tigre", stats.Tigre],
      ["Águila", stats.Águila],
    ]);

    const options = {
      pieHole: 0.3,
      fontSize: 16,
      backgroundColor: "#f7f3e7",
      colors: [
        "#FF6384",
        "#FF6384",
        "#FF6384",
        "#36A2EB",
        "#36A2EB",
        "#FFCE56",
        "#FFCE56",
        "#4BC0C0",
        "#4BC0C0",
        "#9966FF",
        "#9966FF",
        "#FF9F40",
        "#FF9F40",
      ],
    };

    const chart = new google.visualization.PieChart(
      element.querySelector(".chartContainer3")
    );
    chart.draw(googleData, options);
  }
};
