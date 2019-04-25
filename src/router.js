import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/LogIn.vue";
import Home from "./views/Home.vue";
import LogOut from "./views/LogOut.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      component: Welcome
    },
    {
      path: "/Welcome",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/SignUp",
      name: "signup",
      component: SignUp
    },
    {
      path: "/LogIn",
      name: "login",
      component: LogIn
    },
    {
      path: "/LogOut",
      name: "logout",
      component: LogOut
    },
    {
      path: "/Home",
      name: "home",
      component: Home
    }
  ]
});
