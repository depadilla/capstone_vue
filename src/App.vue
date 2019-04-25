<template>
  <!-- prettier-ignore -->
  <div id="app">
    <div id="nav">
      <router-link to="/welcome" v-if="!jwt">Welcome |</router-link>
      <router-link to="/Home" v-if="jwt"> Home |</router-link>
      <router-link to="/SignUp" v-if="!jwt"> Sign Up |</router-link>
      <router-link to="/LogIn" v-if="!jwt"> Log In |</router-link>
      <router-link to="/LogOut" v-if="jwt"> Log Out </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
  }
};
</script>
