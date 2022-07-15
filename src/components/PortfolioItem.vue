<template>
  <div class="card coin-container">
    <div :data.id="data.id" v-on:click="deleteCoin(data.id)" class="delete-icon">❌</div>
    <div class="update-icon" @click="showModal = true">
      📝
    </div>

    <div class="container image-container">
        <h3 class="crypto-name">{{ data.name }}</h3>
        <p class="balance">{{ data.balance }}</p>
    </div>

      <div class="modal" v-if="showModal">
    <input type="text">
      <button class="close" @click="showModal = false">x</button>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

export default {
    data() {
    return {
      showModal: false
    };
  },
  name: "PortfolioItem",
  props: {
    data: Object,
  },
  methods: {
    deleteCoin: function(id) {
      axios.delete('http://localhost:81/api/user/coins/delete', {
      headers: {
          'x-auth-token': $cookies.get('token_crypto_portfolio')
        },
        data :{
          coinId: id,
        }
        , 
        }).then((response) => {
          this.$emit('deleteItem', id)
          const toaster = createToaster();
          toaster.success('Coin deleted successfully');
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
    }
  }
};
</script>

<style scoped lang="scss">
.coin-container {
    justify-content: center;
    overflow: none;
    white-space: nowrap;
  &:hover {
    background: #FFE5B4;
    transform: scale(1.04);
    transition: .15s all ease-in-out;
  }
  width: 95%;

  @media screen and (min-width: 768px){
    width: 20%;
    min-width: 20%;
  }

  border: 5px solid #1F4690;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  .delete-icon {
    &:hover {
      cursor: pointer;
    }
    top: 0px;
    right: 0px;  
    position:relative;
    }
      .update-icon {
    &:hover {
      cursor: pointer;
    }
    top: 0px;
    left: 0px;  
        position:relative;

    }
  .crypto-name {
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
  }
}

</style>