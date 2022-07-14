<template>
  <div class="card coin-container">
    <div class="container image-container">
        <img class="crypto-image" :src="data.image" />
        <h3 class="crypto-name">{{ data.name }}</h3>
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

    justify-content: center;
    overflow: none;
    white-space: nowrap;
  &:hover {
    background: #FFE5B4;
    transform: scale(1.05);
    transition: .15s all ease-in-out;
  }
  width: 95%;

  @media screen and (min-width: 768px){
    width: 10%;
    min-width: 15%;
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

  .crypto-name {
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
  }
}

</style>