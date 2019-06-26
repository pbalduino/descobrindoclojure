import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Dedication from './components/Dedication.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/',
   component: Home},
  {path: '/dedication',
   component: Dedication}.
  {path: '/author',
   component: Author}
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
