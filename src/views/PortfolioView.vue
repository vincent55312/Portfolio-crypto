<template>
  <Navbar/>

<p>
    Select your crypto
    <SearchDropdown
   :options="coins"
    v-on:selected="onSelectedOption"
    v-on:filter="getDropdownValues"
    v-model="coinId"
>
</SearchDropdown>
    <div class="form-group">
        <input type="text" v-model="balance" class="form-control" placeholder="Number of coins">
    </div>
    <button class="btn btn-primary" v-on:click="checkForm" type="button">Add coin to my portfolio</button>

</p>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchDropdown from 'search-dropdown-vue';
import {reactive, ref} from 'vue';
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

export default {
  name: "PortfolioView",
  components: {
    Navbar,
    SearchDropdown,
    reactive,
    ref
  },
  data() {
    return {
      coins: [],
      coinId : null,
      balance : null
    };
  },
  mounted() {
    this.getCoins();
  },
  methods: {
    getCoins() {
      axios.get("http://localhost:81/api/markets").then((response) => {
        this.coins = response.data;
      }).catch((error) => {
        const errorMessage = error.response.data;
        const toaster = createToaster();
        if (errorMessage !== undefined) {
          toaster.error(error.response.data);
        } else {
          toaster.error(error);
        }
      });
    },
    checkForm() {
        console.log(this.balance);
        const onSelectedOption = (payload) => object = payload;
        console.log(onSelectedOption);
    },
    
  },
};
</script>
<style lang="scss">

.form-control {
    width: 20%;
}

</style>