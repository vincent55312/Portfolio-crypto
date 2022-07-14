<template>
  <div class="home">
  <Navbar/>

    <WelcomeMessage class="message" msg="Welcome to your portfolio crypto" />
    <button class="buttons-refresh" v-on:click="getCoins()">
      Refresh coins
    </button>
    <div class="container-coins">
      <Coin v-for="coin in coins" :key="coin.id" :data="coin"></Coin>
    </div>
  </div>
</template>

<script>
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import axios from "axios";
import Coin from "@/components/Coin.vue";
import Navbar from "@/components/Navbar.vue";
import { createToaster } from "@meforma/vue-toaster";


export default {
  name: "HomeView",
  components: {
    Coin,
    WelcomeMessage,
    Navbar
},
  data() {
    return {
      coins: [],
    };
  },
  mounted() {
    this.getCoins();
  },
  methods: {
    getCoins() {
      axios.get("http://localhost:81/api/markets").then((response) => {
        this.coins = response.data;
        const toaster = createToaster();
        toaster.success(`Coins updated successfully`);
      }).catch((error) => {
        const toaster = createToaster();
        const errorMessage = error.response.data;
        if (errorMessage !== undefined) {
          toaster.error(error.response.data);
        } else {
          toaster.error(error);
        }
      });
    },
  },
  created(){
    document.title = "Home";
  }
};
</script>

<style lang="scss">
.buttons-refresh {

  margin-top: -20px;
  width: 100px;
  height: 30px;
  margin: 5px;
  background-color: #231955;
  color: white;
  border-radius: 20px;
}

.container-coins {
          flex-direction: column;

        @media screen and (min-width: 768px){
        flex-direction: row;

    }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.message {
  color: #231955;
}
</style>
