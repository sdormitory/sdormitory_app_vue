import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import location from '@/locations/location';
import commons from '@/locations/commons';
import axios from 'axios';
import qs from 'qs';
import 'lib-flexible'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$location = location;
Vue.prototype.$commons = commons;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
