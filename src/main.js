import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueAnalytics from 'vue-analytics'
import VueShortcuts from 'vue-shortcuts'

import App from '@/App.vue'
import Store from '@/services/Store'

import Home from '@/components/Home.vue'
import Reader from '@/components/Reader.vue'

import Author from '@/components/book/Author.vue'
import Dedication from '@/components/book/Dedication.vue'
import Foreword from '@/components/book/Foreword.vue'
import OnlineVersion from '@/components/book/OnlineVersion.vue'
import Thanks from '@/components/book/Thanks.vue'
import Warning from '@/components/book/Warning.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueShortcuts, { prevent: ['input'] })

const isProd = process.env.NODE_ENV === 'production'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      next: '/online'
    }
  },
  {
    path: '/online',
    component: OnlineVersion,
    meta: {
      next: '/dedication',
      previous: '/',
      title: 'Sobre a versão online'
    }
  },
  {
    path: '/author',
    component: Author,
    meta: {title: 'Sobre o autor'}
  },
  {
    path: '/dedication',
    component: Dedication,
    meta: {
      previous: '/online',
      next: '/foreword',
      title: 'Dedicatória'
    }
  },
  {
    path: '/foreword',
    component: Foreword,
    meta: {
      previous: '/dedication',
      next: '/thanks',
      title: 'Prefácio'
    }
  },
  {
    path: '/thanks',
    component: Thanks,
    meta: {
      previous: '/foreword',
      next: '/warning',
      title: 'Agradecimentos'
    }
  },
  {
    path: '/warning',
    component: Warning,
    meta: {
      previous: '/thanks',
      title: 'Aviso'
    }
  },
  {
    path: '/:chapter',
    component: Reader,
    meta: {title: ':('}
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


const app = new Vue({
  router,
  store: Store,
  render: h => h(App),
  data: function() {
    return {
      swipeX: -1
    }
  },
  methods: {
    handleGlobalKeyUp: function(event) {
      const key = event.key
      const meta = this.$route.meta

      if(meta) {
        if((key === 'Home' || key === 'h')) {
          this.$router.push('/')
        } else if((key === 'ArrowRight' || key === 'k') && meta.next) {
          this.$router.push(meta.next)
        } else if((key === 'ArrowLeft' || key === 'j') && meta.previous) {
          this.$router.push(meta.previous)
        }
      }
    },
    handleTouchStart: function(event) {
      this.$data.swipeX = event.changedTouches[0].clientX;
    },
    handleTouchEnd: function(event) {
      const meta = this.$route.meta

      if(this.$data.swipeX - 100 >= event.changedTouches[0].clientX  && meta.next) {
        this.$data.swipeX = -1;
        this.$router.push(meta.next)
      } else if(this.$data.swipeX + 100 <= event.changedTouches[0].clientX && meta.previous) {
        this.$data.swipeX = -1;
        this.$router.push(meta.previous)
      }
    }

  }
}).$mount('#app')

router.afterEach((to, from) => {
  app.$ga.page({
    page: to.fullPath,
    title: document.title,
    location: `${window.location.origin}/#${to.fullPath}`
  })
})


window.addEventListener('keyup', function(event) {
  app.handleGlobalKeyUp(event);
});

document.addEventListener('touchstart', function(event) {
  app.handleTouchStart(event);
});

document.addEventListener('touchend', function(event) {
  app.handleTouchEnd(event);
});
