// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import ElementUI from 'element-ui';
import Vue from 'vue';
import App from './App';
import router from './router';
import './mockjs/mock';

Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
