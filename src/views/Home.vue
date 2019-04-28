<template>
  <div class="home">
    <h1>{{ welcome_message }}</h1>
    <div v-for="location in locations.slice(0, 5)">
      <h4>{{ location.name }}</h4>
      <p>Description: {{ location.description }}</p>
      <p>Capacity: {{ location.capacity }}</p>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 2em;
}
#map {
  margin-left: auto;
  margin-right: auto;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 400px;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      welcome_message: "Welcome!",
      locations: []
    };
  },
  created: function() {
    axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/bar.json").then(response => {
      this.location = response.data;
    });
    axios.get("/api/locations").then(response => {
      this.locations = response.data;
    });
    {
      this.jwt = localStorage.jwt;
      console.log("My jwt is", this.jwt);
    }
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGVwYWRpbGxhIiwiYSI6ImNqdWQ5bnVwODAzMzc0ZG54Nmczc2dtbnkifQ.KBH1DI_79-4JNlAOhb3xZg";
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-87.6348295, 41.8921364], // starting position [lng, lat]
      zoom: 13, // starting zoom
      interactive: false
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
    var marker = new mapboxgl.Marker().setLngLat([-87.6348295, 41.8921364]).addTo(map);
  },
  methods: {}
};
</script>
