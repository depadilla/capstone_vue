<template>
  <div class="home">
    <div v-for="location in locations.slice(0, 5)" class="container">
      <!-- <h4>{{ location.name }}</h4>
      <p>Description: {{ location.description }}</p>
      <p>Capacity: {{ location.capacity }}</p>
      <router-link v-bind:to="`/locations/${location.id}`">More Info</router-link> -->
      <ul class="row spatialism-sec pl-0">
        <li class="col-lg-12 col-md-10 col-sm-6 col-xs-4">
          <a v-bind:href="`/locations/${location.id}`" v-on:click="`/locations/${location.id}`">
            <div class="spatialism-sec-nner">
              <h4>{{ location.name }}</h4>
              <p>
                {{ location.description }}
                <br />
                Capacity: {{ location.capacity }}
              </p>
              <span>Headcount: {{ location.headcount }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <br />

    <section class="section pb-0 mr-8 ml-8" data-parallax="assets/img/street.jpg" data-overlay="4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div
              class="mnb-8 z-index-10 shadow-8"
              data-provide="slider"
              data-slides-to-show="1"
              data-slides-to-scroll="1"
              data-dots="true"
            >
              <div>
                <div class="card border-0 p-7">
                  <blockquote>
                    "Make friends first, make sales second, make love third. In no particular order"
                  </blockquote>
                  <div class="d-flex align-items-center border-top-muted pt-4">
                    <div class="avatar">
                      <img class="img-fluid rounded-circle" src="assets/img/mc.png" alt="Image Description" />
                    </div>
                    <div class="ml-3">
                      <h4 class="fs-18 mb-0">Michael Scott</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row justify-content-center text-white">
              <div class="col-sm-4 col-lg-4 mb-7 mb-sm-0">
                <div class="media">
                  <div class="mr-3">
                    <i class="icon-user-search-1 fs-44 mt-3"></i>
                  </div>
                  <div class="media-body">
                    <h2
                      class="fs-40 mb-0 bar-count"
                      data-provide="countup"
                      data-from="0"
                      data-to="5"
                      data-prefix=""
                      data-suffix=""
                    ></h2>
                    <p class="h5 mb-0">Total Bars</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-4 mb-7 mb-sm-0">
                <div class="media">
                  <div class="mr-3">
                    <i class="icon-cloud-download fs-47 mt-3"></i>
                  </div>
                  <div class="media-body">
                    <h2
                      class="fs-40 mb-0 weather-countup"
                      data-from="0"
                      v-bind:data-to="parseInt(weather.main.temp)"
                      data-suffix=""
                    ></h2>
                    <p class="h5 mb-0">Fahrenheit</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-4 mb-7 mb-sm-0">
                <div class="media">
                  <div class="mr-3">
                    <i class="icon-user-heart-2 fs-44 mt-3"></i>
                  </div>
                  <div class="media-body">
                    <h2 class="fs-40 mb-0" data-provide="countup" data-from="0" data-to="268" data-suffix=""></h2>
                    <p class="h5 mb-0">People Near You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="oval-divider--bottom oval-divider--5"></div>
    </section>
  </div>
</template>

<!-- "`${weather.main.temp}`" -->

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
  width: 90%;
  height: 400px;
  margin-bottom: 2em;
  border-style: double;
}
p {
  font-family: "Exo 2", sans-serif;
}
</style>

<script>
/* global mapboxgl */
var axios = require("axios");
import Vue from "vue";

export default {
  data: function() {
    return {
      welcome_message: "Welcome!",
      locations: [],
      weather: { main: {} }
    };
  },
  created: function() {
    axios.get("/api/locations").then(response => {
      this.locations = response.data;
    });
    {
      this.jwt = localStorage.jwt;
    }
  },
  mounted: function() {
    axios.get("/api/weather").then(response => {
      this.weather = response.data;
      // set weather value directly
      $(".weather-countup").html(this.weather.main.temp);

      // use countup jquery plugin to animate the count up
      // Vue.nextTick(() => {
      //   $(".weather-countup").data("provide", "countup");
      //   console.log($(".weather-countup").data());
      //   console.log($(".bar-count").data());

      //   const countUp = new CountUp($(".weather-countup"), 0, 1000);
      //   if (!countUp.error) {
      //     countUp.start();
      //   } else {
      //     console.error(countUp.error);
      //   }
      // });
    });
  },
  methods: {}
};
</script>
