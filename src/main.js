import Vue from 'vue';
import AppRouter from './AppRouter.vue';
import VueRouter from 'vue-router';
import PageOne from './pages/PageOne.vue';
import PageTwo from './pages/PageTwo.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: PageOne },
  { path: '/p2', component: PageTwo }
];

const router = new VueRouter({
  mode: 'history', // remove o hash da URL
  routes
});

new Vue({
  router,
  render: h => h(AppRouter)
}).$mount('#app');
