<template>
  <!-- prettier-ignore -->
  <div id="app" class="wrapper">

    <!--Header-->
    <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 45, 'stickySetTop': '-45px', 'stickyChangeLogo': true}">
        <div class="header-body">
            <div class="header-container container">
                <div class="header-row">
                    <div class="header-column justify-content-end">
                        <div class="header-row">
                            <div class="header-nav header-nav-links order-2 order-lg-1">
                                <div class="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                    <nav class="collapse-toggle">
                                        <ul class="nav nav-pills" id="mainNav">
                                            <li class="dropdown dropdown-mega">
                                                <a class="dropdown-item dropdown-toggle" v-if="!jwt" href="/Welcome">
                                                    Welcome
                                                </a>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-item dropdown-toggle" v-if="jwt" href="/Home">
                                                    Home
                                                </a>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-item dropdown-toggle" v-if="!jwt" href="/SignUp">
                                                    Sign Up
                                                </a>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-item dropdown-toggle" v-if="!jwt" href="/LogIn">
                                                    Log In
                                                </a>
                                            </li>
                                            <li class="dropdown dropdown-mega">
                                                 <router-link to="#" v-on:click.native="logOut()" v-if="jwt" > Log Out </router-link>
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
    <div style="height: 100px"></div>
    <!--End Header-->

    <router-view />
<!-- FOOTER -->
        <footer class="bg-dark p-0">
            <div class="container pt-10 pb-0">
                <div class="row">
                    <div class="col-sm-5">
                        <!-- <img alt="Vertex" src="assets/img/logo-white.png" class="mb-4" width="120"> -->
                        <p>
                            <span class="m-link-light">Wind</span> New places to explore! <br>
                        </p>
                        <div class="social social-light mt-3">
                            <a class="social-facebook m-0" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="social-twitter m-0" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="social-linkedin m-0" href="#"><i class="fab fa-linkedin"></i></a>
                            <a class="social-instagram m-0" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <h3 class="h6 mb-3 text-white">
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
                        <h3 class="h6 mb-3 text-white">
                            Service
                        </h3>
                        <ul class="list-unstyled mb-0">
                            <li><a class="m-list--link" href="#">App Design</a></li>
                            <li><a class="m-list--link" href="#">App Development</a></li>
                            <li><a class="m-list--link" href="#">Web Design</a> </li>
                            <li><a class="m-list--link" href="#">Illustration</a> </li>
                            <li><a class="m-list--link" href="#">Graphic Design </a> </li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h3 class="h6 mb-3 text-white">
                            Contact Us
                        </h3>

                        <address class="fs-14 text-white-50">
                            <strong class="text-white">Twitter, Inc.</strong><br>
                            1355 Market St, Suite 900<br>
                            San Francisco, CA 94103<br>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                        <address class="fs-14">
                            <strong class="text-white">Full Name</strong><br>
                            <a class="m-link" href="mailto:#">first.last@example.com</a>
                        </address>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="container m-gab-1 border-top-muted">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <p><span class="fs-17">©</span> 2019 <span class="m-link-light">Wind</span>. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- End Copyright -->
        </footer>
        <!-- END FOOTER -->
  </div>
</template>

<style></style>

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
