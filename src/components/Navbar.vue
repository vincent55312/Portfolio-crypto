<template>
  <nav>
    <div class="banner">Crypto Portfolio</div>
    <div class="home">
    <router-link to="/">Home</router-link>
    </div>
    <div class="loggers" v-if="token == null">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>

    <div class="loggers" v-if="token != null">
      <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/disconnect">Disconnect</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: "Navbar",
    data() {
      return {
        token: null
      };
    },
    created() {
        this.token = $cookies.get('token_crypto_portfolio')
        if (this.token == 'null') {
            this.token = null;
        }
    }
}
</script>