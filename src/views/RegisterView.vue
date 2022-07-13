<template>
  <div class="register">
    <h1>Register</h1>

  <FormRegister>
    
  </FormRegister>
  </div>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";


export default {
  name: "RegisterView",
    created(){
    document.title = "Register";
  },
    components: {
    FormRegister,
  },
};
</script>
