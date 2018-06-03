import Vue from 'vue';
import Router from 'vue-router';
import Photocheck from '../components/Photocheck';
import Rulechange from '../components/Rulechange';
import Group from '../components/Group';

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
  {
    path: '/group/:id',
    component: Group,
  },
];

export default new Router({
  routes,
});
