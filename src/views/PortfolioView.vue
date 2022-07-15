<template>
  <Navbar/>
  <p>
    <div class="form-group">
        <input type="text" v-model="coinId" class="form-control" placeholder="Coin name">
    </div>
    <div class="form-group">
        <input type="text" v-model="balance" class="form-control" placeholder="Number of coins">
    </div>
    <button class="btn btn-primary" v-on:click="Create" type="button">Add coin to my portfolio</button>
  </p>

  <div class="container-coins">
      <PortfolioItem @deleteItem="onItemDelete" v-for="coin in portfolio" :key="coin.id" :data="coin"></PortfolioItem>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchDropdown from 'search-dropdown-vue';
import {reactive, ref} from 'vue';
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
import PortfolioItem from "@/components/PortfolioItem.vue";

export default {
  name: "PortfolioView",
  components: {
    Navbar,
    SearchDropdown,
    reactive,
    ref,
    PortfolioItem
  },
  data() {
    return {
      coins: [],
      portfolio: [],
      coinId : null,
      balance : null,
    };
  },
  mounted() {
    this.getPortfolio();
  },
  methods: {
    getPortfolio() {
        axios.post('http://localhost:81/api/user/portfolio/get', {
        }, {
          headers: {
            'x-auth-token': $cookies.get('token_crypto_portfolio') 
          }
        }
        ).then((response) => {
          this.portfolio = response.data;
        })
        .catch((error) => {
          const toaster = createToaster();
          try {
            const errorMessage = error.response.data;
          if (errorMessage !== undefined) {
            toaster.error(error.response.data);
          } else {
            toaster.error(error);
          }
          } catch {
            toaster.error(error);
          }
        });
    },
    Create() {
      const n = parseFloat(this.balance);
      if (Number(n) === n && n % 1 === 0 && this.coinId !== null) {
        console.log(this.coinId);
        axios.post('http://localhost:81/api/user/coins/create', {
          name: this.coinId,
          balance: parseFloat(this.balance)
        }, {
          headers: {
            'x-auth-token': $cookies.get('token_crypto_portfolio') 
          }
        }
        ).then((response) => {
          const a = new Object();
          a.id = response.data.id;
          a.name = this.coinId;
          a.balance = this.balance;
          this.portfolio[this.portfolio.length] = a;
          const toaster = createToaster();
          toaster.success(response.data.name + ' added successfully');
        })
        .catch((error) => {
           try {
          const toaster = createToaster();
          const errorMessage = error.response.data;
          if (errorMessage !== undefined) {
          toaster.error(error.response.data);
          } else {
          toaster.error(error);
          }}
          catch {
             toaster.error(error);
          }
        });
        
    } else {
          const toaster = createToaster();
          toaster.error('Incorrect input');
      }
    },
    onItemDelete (value) {
      let a = [];

      this.portfolio.forEach(item => {
        if (item.id !== value) {
          a.push(item);
        }
      });
      this.portfolio = a;
    }
  },
  created(){
    document.title = "Portfolio"; 
  }
};
</script>
<style lang="scss">

.form-control {
    width: 20%;
}

.container-coins {
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

    @media screen and (min-width: 768px){
    flex-direction: row;
  }
}

.message {
  color: #231955;
}
</style>