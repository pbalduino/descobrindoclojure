import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Reader from './components/Reader.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/',
   component: Home},
  {path: '/reader/:chapter',
   component: Reader}
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
