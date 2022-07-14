<template>

  <router-view />
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    flex-direction: column;
    display: flex;
    justify-content: center;
    .banner {
        padding: 5px;
        font-size: large;
        font-weight: bold;
        color: #E8AA42;
        margin-bottom: 10px;
        @media screen and (min-width: 768px){
            margin-bottom: 0px;
        }
    }

    background-color: #1F4690;
    display: flex;
    padding: 30px;
    font-size: 20px;
    @media screen and (min-width: 768px){
        flex-direction: row;
    }

  a {
    min-width: 10%;
    margin-left: 30px;
    overflow-wrap:normal;
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 5px;
    &.router-link-exact-active {
            outline: none;
            background-color: #E8AA42;
            box-shadow: 0px 2px 2px #231955;
            border-radius: 10px;
            border: none;
            color: white;
        }
  }

}
</style>
