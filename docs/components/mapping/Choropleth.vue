<template>
  <div id="map"></div>
  <div class="info" id="info">
    <calcite-label>
      Nature of the data
      <calcite-select :value="state.type" @calciteSelectChange="updateType">
        <calcite-option
          v-for="type in projectionTypes"
          :key="type"
          :value="type"
          :selected="state.type === type"
        >
          {{ type }}
        </calcite-option>
      </calcite-select>
    </calcite-label>
    <calcite-label>
      Number of classes
      <calcite-input-number
        placeholder="Offset distance"
        step="1"
        integer
        number-button-type="horizontal"
        min="1"
        max="8"
        value="6"
      >
      </calcite-input-number>
    </calcite-label>
  </div>
  <div class="info legend" id="legend"></div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import statesData from "../../data/States.json";

const DefaultProjection = "Sequential";
const projectionTypes = ["Sequential", "Diverging", "Qualitative"];

const state = reactive({
  type: DefaultProjection,
});

function updateType(event) {
  state.type = event.target.value;
}

let Leaflet;
onMounted(async () => {
  Leaflet = await import("leaflet");
  const map = Leaflet.map("map").setView([37.8, -96], 3);

  Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  Leaflet.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);

  const info = Leaflet.control();
  info.onAdd = () => document.getElementById("info");
  info.addTo(map);

  const legend = Leaflet.control({ position: "bottomright" });
  legend.onAdd = function () {
    const div = document.getElementById("legend");
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000];

    div.innerHTML = grades
      .map(
        (grade, index) =>
          `<i style="background: ${getColor(grade + 1)}"></i> ${grade}${
            grades[index + 1] ? "&ndash;" + grades[index + 1] + "<br>" : "+"
          }`
      )
      .join("");

    return div;
  };
  legend.addTo(map);
});

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}
function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

function onEachFeature(feature, layer) {
  let popupContent = `<p> <b> ${feature.properties.name} density</b>: ${feature.properties.density} people / mi<sup>2</sup> </p>`;
  layer.bindTooltip(popupContent).openTooltip();
}
</script>

<style scoped>
@import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
@import "@esri/calcite-components/dist/calcite/calcite.css";
.slider {
  max-width: 300px;
}

.leaflet-container {
  height: 40vh;
  width: 100%;
  z-index: 1;
}

/* Leaflet buttons use anchor tags for some reason and vitepress underlines them */
:deep(.leaflet-control-zoom-in),
:deep(.leaflet-control-zoom-out) {
  text-decoration: none;
  color: black;
}

:deep(.info) {
  padding: 4px 6px;
  background: rgb(133, 133, 133);
  background: rgba(127, 125, 125, 0.8);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

:deep(.legend) {
  line-height: 18px;
}

:deep(.legend i) {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
  opacity: 0.7;
}
</style>
