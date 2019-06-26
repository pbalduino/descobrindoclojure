const store = new Vuex.Store({
  state: {
    document: {}
  },
  mutations: {
    newDocument(state, document) {
      console.log('commiting', state.document);
      state.document = document;
      console.log('commited', state.document);
      return state.document;
    }
  },
  actions: {
    NEW({commit, state}, document) {
      console.log('dispatch', document);
      commit('newDocument', document);
    }
  },
  getters: {
    document: (state) => {
      return state.document;
    }
  }
});

var app = new Vue({
  el: '#reader',
  store,
  data: {
    hello: "Hello"
  },
  methods: {
    render: function() {
      const document = this.$store.getters.document;

    }
  },
  created: function () {
    axios
      .get('https://descobrindoclojure.com.br/book/json/0000.json')
      .then((response) => {
        const document = response.data.content;
        return store.dispatch('NEW', document);
      })
      .then(() => {
        app.render();
      });
  }
});

console.log(app);
