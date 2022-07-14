import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from 'vue-cookies'
import Navbar from "./components/Navbar.vue";

createApp(App).use(router, VueCookies).mount("#app");
createApp(Navbar).use(router);