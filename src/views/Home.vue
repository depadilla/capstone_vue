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
img {
  width: 250px;
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
    axios.get("/api/locations").then(response => {
      this.locations = response.data;
    });
    {
      this.jwt = localStorage.jwt;
      console.log("My jwt is", this.jwt);
    }
  },

  methods: {}
};
</script>
