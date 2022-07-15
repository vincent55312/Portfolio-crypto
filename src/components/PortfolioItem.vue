<template>
    <div class="card coin-container">
        <div class="modal" v-if="showModal">
            <input type="text" placeholder="Enter the new balance" v-model="balance">
            <button :data.id="data.id" v-on:click="updateCoin(data.id)" class="mini-btn" @click="showModal = false">✅</button>
            <button :data.id="data.id" class="mini-btn" @click="showModal = false">✂️</button>
        </div>
        <div class="container image-container">
            <h3 class="crypto-name">{{ data.name }}</h3>
            <p class="balance">{{ data.balance }} unit(s)</p>
        </div>
        <div :data.id="data.id" v-on:click="deleteCoin(data.id)" class="delete-icon">❌</div>
        <div class="update-icon" @click="showModal = true">📝</div>
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
        }).then(() => {
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
                }
            }
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
          toaster.success('Balance updated to ' +  this.balance +' successfully');
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
    width: 95%;
    border: 5px solid #1F4690;
    margin: 25px;
    margin-bottom: 20px;
    border-radius: 20px;

    &:hover {
        background: #FFE5B4;
        transform: scale(1.04);
        transition: .15s all ease-in-out;
    }

    @media screen and (min-width: 768px){
        width: 20%;
        min-width: 20%;
    }
  .delete-icon {
    display:inline;
        &:hover {
        cursor: pointer;
        }
    }
    .update-icon {
        display:inline;
        &:hover {
            cursor: pointer;
        }
    }
    .balance {
          color: #E8AA42;
          font-size: 15px;
          font-weight: bolder;
    }
    .crypto-name {
        text-overflow: ellipsis; 
        overflow: hidden; 
        white-space: nowrap;
    }
}

</style>