<template>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
    export default {
    created() {
        $cookies.set('token_crypto_portfolio', null);
        const toaster = createToaster();
        toaster.success(`Disconnected successfully`);
        this.$router.push({name:'home'});
    }
  };
</script>