<template>
  <div class="home">

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

export default {
  name: "HomeView",
  components: {
    Coin,
    WelcomeMessage,
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
        console.log(this.coins[0]);
      });
    },
  },
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
