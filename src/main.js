import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import VueCodeHighlight from 'vue-code-highlight'

import App from '@/App.vue'

import BibliographyEntry from '@/components/BibliographyEntry.vue'
import Box from '@/components/Box.vue'
import ChapterQuote from '@/components/ChapterQuote.vue'
import Comment from '@/components/Comment.vue'
import Home from '@/components/Home.vue'
import Image from '@/components/Image.vue'
import IndexEntry from '@/components/IndexEntry.vue'
import LabelEntry from '@/components/LabelEntry.vue'
import Page from '@/components/Page.vue'
import Reader from '@/components/Reader.vue'
import Snippet from '@/components/Snippet.vue'
import Wip from '@/components/Wip.vue'

import Author from '@/components/book/Author.vue'
import Data from '@/components/book/Data.vue'
import Dedication from '@/components/book/Dedication.vue'
import Foreword from '@/components/book/Foreword.vue'
import Functions from '@/components/book/Functions.vue'
import GentleIntroduction from '@/components/book/GentleIntroduction.vue'
import OnlineVersion from '@/components/book/OnlineVersion.vue'
import Presentation from '@/components/book/Presentation.vue'
import Repl from '@/components/book/Repl.vue'
import Thanks from '@/components/book/Thanks.vue'
import Warning from '@/components/book/Warning.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueCodeHighlight)

Vue.component('bib', BibliographyEntry)
Vue.component('box', Box)
Vue.component('chapter-quote', ChapterQuote)
Vue.component('comment', Comment)
Vue.component('image', Image)
Vue.component('index', IndexEntry)
Vue.component('page', Page)
Vue.component('ref-label', LabelEntry)
Vue.component('snippet', Snippet)
Vue.component('wip', Wip)

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
      next: '/author',
      title: 'Agradecimentos'
    }
  },
  {
    path: '/author',
    component: Author,
    meta: {
      previous: '/thanks',
      next: '/warning',
      title: 'Sobre o autor'
    }
  },
  {
    path: '/warning',
    component: Warning,
    meta: {
      previous: '/author',
      next: '/presentation',
      title: 'Aviso'
    }
  },
  {
    path: '/presentation',
    component: Presentation,
    meta: {
      previous: '/warning',
      next: '/gentleintro',
      title: 'Apresentação'
    }
  },
  {
    path: '/gentleintro',
    component: GentleIntroduction,
    meta: {
      previous: '/presentation',
      next: '/repl',
      title: 'Uma introdução gentil ao Clojure'
    }
  },
  {
    path: '/repl',
    component: Repl,
    meta: {
      previous: '/gentleintro',
      next: '/functions',
      title: 'O REPL é tão importante...'
    }
  },
  {
    path: '/functions',
    component: Functions,
    meta: {
      previous: '/repl',
      next: '/data',
      title: 'Descobrindo o poder das funções'
    }
  },
  {
    path: '/data',
    component: Data,
    meta: {
      previous: '/functions',
      title: 'Dados e metadados'
    }
  },
  {
    path: '/:chapter',
    component: Reader,
    meta: {title: ':('}
  }
];

window.Prism.languages.clojure = {
    'comment': /;+[^\r\n]*(\r?\n|$)/g,
    'string': /(")(\\?.)*?\1/g,
    'operator ': /(::|[:|'])\b[a-zA-Z][a-zA-Z0-9 *+!-_?]*\b/g, //used for symbols and keywords
    'keyword': {
        pattern: /([^\w+*'?-])(def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def-|defn|defn-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|defrecord|deftype|defproject|ns|\*|\+|-|->|\/|<|<=|=|==|>|>=|\.\.|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/g,
        lookbehind: true
    },
    'boolean': /\b(true|false)\b/g,
    'number': /\b-?(0x)?\d*\.?\d+\b/g,
    'punctuation': /[{}[](),]/g
};

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

router.afterEach((to) => {
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
