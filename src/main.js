import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from '@/App.vue'
import Store from '@/services/Store'

import Home from '@/components/Home.vue'
import Reader from '@/components/Reader.vue'

import OnlineVersion from '@/components/book/OnlineVersion.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/online',
    component: OnlineVersion
  },
  {
    path: '/:chapter',
    component: Reader
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  router,
  store: Store,
  render: h => h(App),
  created: function() {
    // this.$store.dispatch('updateIndex');
  }
}).$mount('#app')
