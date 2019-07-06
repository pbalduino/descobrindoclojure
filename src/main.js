import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueAnalytics from 'vue-analytics'

import App from '@/App.vue'
import Store from '@/services/Store'

import Home from '@/components/Home.vue'
import Reader from '@/components/Reader.vue'

import OnlineVersion from '@/components/book/OnlineVersion.vue'
import Dedication from '@/components/book/Dedication.vue'
import Foreword from '@/components/book/Foreword.vue'
import Thanks from '@/components/book/Thanks.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)

const isProd = process.env.NODE_ENV === 'production'

console.log("Production", isProd)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/online',
    component: OnlineVersion,
    meta: {title: "Sobre a versão online"}
  },
  {
    path: '/dedication',
    component: Dedication,
    meta: {title: "Dedicatória"}
  },
  {
    path: '/foreword',
    component: Foreword,
    meta: {title: "Prefácio"}
  },
  {
    path: '/thanks',
    component: Thanks,
    meta: {title: "Agradecimentos"}
  },
  {
    path: '/:chapter',
    component: Reader,
    meta: {title: ":("}
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const TITLE = 'Descobrindo Clojure'

  if(to.meta.title) {
    document.title = `${TITLE} - ${to.meta.title}`
  } else {
    document.title = `${TITLE}`
  }

  next()
})

Vue.use(VueAnalytics, {
  id: 'UA-137706670-1',
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  },
  router
})


new Vue({
  router,
  store: Store,
  render: h => h(App),
  created: function() {

  }
}).$mount('#app')
