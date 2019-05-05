<template>
  <!-- prettier-ignore -->
  <div id="app" class="wrapper">

    <section data-overlay="3" class="section m-gab-4 bg-primary"> 
      <div class="custom-section-3">
        <img src="/assets/img/sectionbg.png" alt="vertex">
      </div>
    </section>

<header id="header" class="header-floating-bar" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'reveal', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 150, 'stickySetTop': '0', 'stickyChangeLogo': false}">
  <div class="header-top mnt-3 mb-3 border-0">
    <div class="header-top-container container">
      <div class="row">
        <div class="col-md-4 pl-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><a class="fs-15 m-link-white" href="#"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="header-body header-body-bottom-border">
    <div id="bar" class="header-container header-container-height-sm container">
      <div class="header-row">
        <div class="header-column">
          <div class="header-row">
            <div class="header-logo">
              <a href="index-2.html">
                <h1 class="titulo">Wind</h1>
              </a>
            </div>
          </div>
        </div>
        <div class="header-column justify-content-end mr-lg-4">
          <div class="header-row">
            <div class="header-nav header-nav-links order-2 order-lg-1">
              <div class="header-nav-main header-nav-main-clone-items header-nav-main-slide header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                <nav class="collapse">
                  <ul class="nav nav-pills" id="mainNav">
                    <li class="dropdown dropdown-mega">
                      <a class="btn btn-xl btn-round btn-light w-180 floated font-weight-bold" v-if="!jwt" href="/Welcome">
                        Welcome
                      </a>
                    </li>
                    <li class="dropdown">
                      <a class="btn btn-xl btn-round btn-light w-180 floated font-weight-bold" v-if="jwt" href="/Home">
                        Home
                      </a>
                    </li>
                    <li class="dropdown">
                      <a class="btn btn-xl btn-round btn-light w-180 floated font-weight-bold" v-if="!jwt" href="/LogIn">
                        Log In
                      </a>
                    </li>
                    <li class="dropdown">
                      <a class="btn btn-xl btn-round btn-light w-180 floated font-weight-bold" v-if="!jwt" href="/SignUp">
                        Sign Up
                      </a>
                    </li>
                    <li class="dropdown">
                      <router-link class="btn btn-xl btn-round btn-light w-180 floated font-weight-bold" to="#" v-on:click.native="logOut()" v-if="jwt" > Log Out </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!--End Header-->


<div style="height: 30px"></div>

<router-view />
<!-- FOOTER -->

<footer class="bg-light p-0">
  <div class="container pt-10 pb-0">
    <div class="row">
      <div class="col-sm-5">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <p>
          <span class="m-link-dark"></span> Where will the Wind take you tonight?
        </p>
        <div class="social social-dark mt-3">
          <a class="social-facebook m-0" href="#"><i class="fab fa-facebook-f"></i></a>
          <a class="social-twitter m-0" href="#"><i class="fab fa-twitter"></i></a>
          <a class="social-linkedin m-0" href="#"><i class="fab fa-linkedin"></i></a>
          <a class="social-instagram m-0" href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="col-sm-2">
        <h3 class="h6 mb-3 text-black">
          Quick Links
        </h3>
        <ul class="list-unstyled mb-0">
          <li><a class="m-list--link" href="#">Home</a></li>
          <li><a class="m-list--link" href="#">About Us</a></li>
          <li><a class="m-list--link" href="#">Service</a> </li>
          <li><a class="m-list--link" href="#">Job <span class="badge badge-secondary">3</span> </a> </li>
          <li><a class="m-list--link" href="#">Review</a> </li>
        </ul>
      </div>
      <div class="col-sm-2">
        <h3 class="h6 mb-3 text-black">
          Service
        </h3>
        <ul class="list-unstyled mb-0">
          <li><a class="m-list--link" href="#">App Design</a></li>
          <li><a class="m-list--link" href="#">App Development</a></li>
          <li><a class="m-list--link" href="#">Web Design</a> </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h3 class="h6 mb-3 text-black">
          Contact Us
        </h3>

        <address class="fs-14 text-black-50">
          <strong class="text-black">Wind, Inc.</strong><br>
          215 W Ohio St Suite 300<br>
           Chicago, IL 60654<br>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <address class="fs-14">
          <strong class="text-black">Daniel Padilla</strong><br>
          <a class="m-link" href="mailto:#">daniel.padilla@wind.com</a>
        </address>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="container m-gab-1 border-top-muted">

    <div class="row">
      <div class="col-md-12 text-center">
        <p><span class="fs-17">©</span> 2019 <span class="m-link-dark">Wind</span>. All rights reserved.</p>
      </div>
    </div>
  </div>
  <!-- End Copyright -->
</footer>
<!-- END FOOTER -->
</div>
</template>

<style>
body {
  padding: 0 !important;
}
.titulo {
  font-family: "Pacifico", cursive;
  font-size: 60px;
  padding-left: 3em;
}
p {
  font-family: "Exo 2", sans-serif;
}
.palabra {
  font-size: 27px !important;
  font-family: "Exo 2", sans-serif;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      jwt: null,
      location: " "
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
  },
  methods: {
    logOut: function() {
      axios({
        method: "patch",
        url: "/api/users/logout"
      }).then(response => {
        this.$router.push("/logout");
      });
    }
  }
};
</script>
