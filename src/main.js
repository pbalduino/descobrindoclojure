import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Reader from '@/components/Reader.vue'
import Store from '@/services/Store'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/reader/:chapter',
    component: Reader
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store: Store,
  render: h => h(App),
  created: function() {
    this.$store.dispatch('updateIndex');
  }
}).$mount('#app')
