<template>
  <div class="show">
    <div class="container">
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.0/mapbox-gl-directions.css"
        type="text/css"
      />

      <div class="container">
        <div class="row justify-content-center align-items-center shadow-8 p-8 border">
          <div class="col-md-5">
            <p class="small o-7 font-weight-bold">Headcount: {{ location.headcount }} people</p>
            <h4>{{ location.name }}</h4>
            <br />
            <h6>
              {{ location.description }}
              <br />
              {{ location.address }}
            </h6>
            <!-- <div class="container" v-for="special in location.specials">
              <li>{{ special.name }} - ${{ special.price }}.00</li>
            </div> -->
            <div class="media-body" v-for="special in location.specials">
              <ul class="list-unstyled fs-15">
                <li>
                  <strong>{{ special.name }}</strong>
                  ${{ special.price }}.00
                </li>
              </ul>
            </div>
            <div>
              <a class="btn btn-xl btn-round btn-light w-180 floated" href="#" v-on:click="checkIn()">
                Check In!
              </a>
              <a class="btn btn-xl btn-round btn-light w-180 floated" href="#" v-on:click="checkOut()">
                Check Out!
              </a>
            </div>
          </div>
          <div class="col-md-7">
            <div id="map" class="h-300 rounded"></div>
            <a class="btn btn-primary btn-pill transition-hover pr-6 pl-6" href="/Home" target="_self">
              Back to all locations
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<style>
#map {
  width: 105%;
  height: 100%;
}
.floated {
  float: left;
  margin-right: 5px;
}
</style>

<script>
import axios from "axios";

/* eslint-disable */

export default {
  data: function() {
    return {
      location: {},
      A1: -87.6371347,
      A2: 41.892514,
      B1: -87.6315971,
      B2: 41.8894298,
      C1: -87.6360374,
      C2: 41.8920448,
      D1: -87.6375766,
      D2: 41.8967205,
      E1: -87.6337935,
      E2: 41.8960176,
      message: "Already checked in!",
      x: 0.0,
      y: 0.0
    };
  },
  mounted: function() {
    axios.get("/api/locations/" + this.$route.params.id).then(response => {
      this.location = response.data;

      switch (this.location.name) {
        case "Municipal Bar":
          this.x = this.A1;
          this.y = this.A2;
          break;
        case "Mercadito":
          this.x = this.B1;
          this.y = this.B2;
          break;
        case "O'Leary's Public House":
          this.x = this.C1;
          this.y = this.C2;
          break;
        case "Farmhouse Chicago":
          this.x = this.D1;
          this.y = this.D2;
          break;
        case "Seoul Taco":
          this.x = this.E1;
          this.y = this.E2;
          break;
        default:
          this.x = 0;
          this.y = 0;
          break;
      }
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGVwYWRpbGxhIiwiYSI6ImNqdWQ5bnVwODAzMzc0ZG54Nmczc2dtbnkifQ.KBH1DI_79-4JNlAOhb3xZg";
      var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      mapboxClient.geocoding
        .forwardGeocode({
          query: this.location.address,
          autocomplete: true,
          limit: 1
        })
        .send()
        .then(function(response) {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];

            var map = new mapboxgl.Map({
              container: "map",
              style: "mapbox://styles/mapbox/streets-v11",
              center: feature.center,
              zoom: 15,
              interactive: false
            });
            // map.addControl(
            //   new MapboxDirections({
            //     accessToken: mapboxgl.accessToken
            //   }),
            //   "top-left"
            // );
            new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            var marker = new mapboxgl.Marker().setLngLat([-87.6348295, 41.8921364]).addTo(map);
          }
        });
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
    });
  },
  methods: {
    checkIn: function() {
      axios({
        method: "patch",
        url: "/api/users/checkin",
        data: { location_id: this.location.id }
      }).then(response => {
        console.log(response);
        if (response.data.message === "User already checked in") {
          alert(response.data.message);
        }
      });
      console.log("Checked In - Updated location ID");
      document.location.reload();
    },
    checkOut: function() {
      axios({
        method: "patch",
        url: "/api/users/checkout",
        data: { location_id: this.location.id }
      }).then(response => {
        console.log(response);
        if (response.data.message === "User already checked out") {
          alert(response.data.message);
        }
      });
      console.log("Checked Out - Updated location ID");
      document.location.reload();
    }
  }
};
</script>
