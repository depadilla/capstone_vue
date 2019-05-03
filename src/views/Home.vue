<template>
  <div class="home">
    <div v-for="location in locations.slice(0, 5)" class="container">
      <h4>{{ location.name }}</h4>
      <p>Description: {{ location.description }}</p>
      <p>Capacity: {{ location.capacity }}</p>
      <router-link v-bind:to="`/locations/${location.id}`">More Info</router-link>
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
                    I just got to Farmhouse and the drinks are amazing!
                  </blockquote>
                  <div class="d-flex align-items-center border-top-muted pt-4">
                    <div class="avatar">
                      <img
                        class="img-fluid rounded-circle"
                        src="assets/img/avatar/avatar2.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div class="ml-3">
                      <h4 class="fs-18 mb-0">Jhon Doe</h4>
                      <!-- <small class="o-7">Sales Manager at Twitter</small> -->
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
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
                      class="fs-40 mb-0"
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
                    <h2 class="fs-40 mb-0" data-provide="countup" data-from="40" data-to="72" data-decimals=""></h2>
                    <p class="h5 mb-0">Weather</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-lg-4 mb-7 mb-sm-0">
                <div class="media">
                  <div class="mr-3">
                    <i class="icon-user-heart-2 fs-44 mt-3"></i>
                  </div>
                  <div class="media-body">
                    <h2 class="fs-40 mb-0" data-provide="countup" data-from="0" data-to="763" data-suffix=""></h2>
                    <p class="h5 mb-0">People Out Near You</p>
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
</style>

<script>
/* global mapboxgl */
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
    }
  },
  mounted: function() {
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
    !(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "weatherwidget-io-js");
  },
  methods: {}
};
</script>
