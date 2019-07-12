import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.less";
// import "ant-design-vue/lib/button/style";
// import {Button} from "ant-design-vue";
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  Antd,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
