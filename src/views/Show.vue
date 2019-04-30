<template>
    <div class="show">
        <h2>{{ location.name }}</h2>
        <p>{{ location.description }}</p>
        <p>{{ location.address }}</p>
        <p>{{ location.headcount }}</p>

        <div v-for="special in location.specials">
            <p>{{ special.name }} - ${{ special.price }}.00</p>
        </div>

        <div><button v-on:click="checkIn()">Check In</button></div>
        <div><button v-on:click="checkOut()">Check Out</button></div>

        <div><router-link to="/Home">Back to all locations</router-link></div>
    </div>
</template>

<style></style>

<script>
import axios from "axios";

/* eslint-disable */

export default {
    data: function() {
        return {
            location: {},
            message: "Already checked in!"
        };
    },
    created: function() {
        axios.get("/api/locations/" + this.$route.params.id).then(response => {
            this.location = response.data;
        });
    },
    mounted: function() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiZGVwYWRpbGxhIiwiYSI6ImNqdWQ5bnVwODAzMzc0ZG54Nmczc2dtbnkifQ.KBH1DI_79-4JNlAOhb3xZg";
        var map = new mapboxgl.Map({
            container: "map", // container id
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [-82.6348295, 41.8921364], // starting position [lng, lat]
            zoom: 13, // starting zoom
            interactive: false
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
