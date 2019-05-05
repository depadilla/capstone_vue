<template>
  <div class="welcome container">
    <br />
    <br />
    <h1>{{ welcome_message }}</h1>
    <h3>Here's a little something about the site:</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Augue mauris augue neque gravida in fermentum et.
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style>
img {
  width: 250px;
}
h1 {
  font-family: "Bree Serif", serif;
  text-align: center;
  font-size: 70px;
}
p {
  font-family: "Exo 2", sans-serif;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      jwt: null,
      welcome_message: "Welcome!"
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
  },
  methods: {}
};
</script>
