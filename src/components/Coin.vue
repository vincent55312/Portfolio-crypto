<template>
  <div class="card coin-container">
    <div class="container image-container">
        <img class="crypto-image" :src="data.image" />
        <h3>{{ data.name }}</h3>
        <p class="price">{{ data.current_price }} $</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
.coin-container {
      &:hover {
        background: #FFE5B4;
    }
  width: 95%;

  @media screen and (min-width: 768px){
      width: 10%;
  }
  border: 5px solid #1F4690;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  .crypto-image {
    height: 100px;
    margin: 10px;
  }

  .price {
    color: #E8AA42;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;

  }
}

</style>