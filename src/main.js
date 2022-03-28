import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

if(process.env.NODE_ENV==='development'){
  // 判断是开发环境，mock 会拦截 Ajax 请求
  require('./mock/index.js')
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")