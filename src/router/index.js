import Vue from 'vue';
import Router from 'vue-router';
import Photocheck from '../components/Photocheck';
import Rulechange from '../components/Rulechange';

Vue.use(Router);

const routes = [
  {
    path: '/photocheck',
    component: Photocheck,
  },
  {
    path: '/rulechange',
    component: Rulechange,
  },
];

export default new Router({
  routes,
});
