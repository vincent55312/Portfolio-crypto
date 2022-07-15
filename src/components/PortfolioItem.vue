<template>
  <div class="card coin-container">
    <div :data.id="data.id" v-on:click="deleteCoin(data.id)" class="delete-icon">❌</div>
    <div class="update-icon" @click="showModal = true">
      📝
    </div>
      <div class="modal" v-if="showModal">
        <input type="text" v-model="balance">
        <button :data.id="data.id" v-on:click="updateCoin(data.id)" class="close" @click="showModal = false">✅</button>
      <button :data.id="data.id" class="close" @click="showModal = false">✂️</button>
    </div>
    <div class="container image-container">
        <h3 class="crypto-name">{{ data.name }}</h3>
        <p class="balance">{{ data.balance }}</p>
    </div>


  </div>

</template>

<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

export default {
    data() {
    return {
      showModal: false,
      balance: null
    };
  },
  name: "PortfolioItem",
  props: {
    data: Object,
  },
  methods: {
    deleteCoin: function(id) {
      axios.delete('http://localhost:81/api/user/coins/delete', {
        data :{
        coinId: id,
        },
        headers: {
        'x-auth-token': $cookies.get('token_crypto_portfolio')
        },
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
        const toaster = createToaster();
        toaster.error(error);
          }
      });
    },
      updateCoin: function(id) {
        axios({
        method: 'put',
        url: 'http://localhost:81/api/user/coins/update',
        data: {
          balance: this.balance,
          coinId: id
        },
        headers: {
          'x-auth-token': $cookies.get('token_crypto_portfolio')
        },
        }).then((res) => {
          const toaster = createToaster();
          toaster.success('Coin updated successfully');
          this.$emit('updateItem', {'id':id, 'balance': res.data.balance})
        })        
        .catch((error) => {
          const toaster = createToaster();
          const errorMessage = error.response.data;
          if (errorMessage !== undefined) {
            toaster.error(error.response.data);
          } else {
            toaster.error(error);
          }
      })
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

    }
      .update-icon {
          &:hover {
            cursor: pointer;
          }
    }
  .crypto-name {
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
  }
}

</style>