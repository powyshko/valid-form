import Vue from "vue";
import App from "./App.vue";
import vuelidate from "vuelidate";

Vue.use(vuelidate);

import "./assets/style/main.scss";

Vue.config.devtools = true;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
