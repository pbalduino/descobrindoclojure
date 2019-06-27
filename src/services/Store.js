import Vuex from 'vuex'
import BookReader from '@/services/BookReader'

export default () => {
  return new Vuex.Store({
    state: {
      index: {},
      chapters: []
    },
    mutations: {
      setIndex(state, newIndex) {
        state.index = newIndex
      }
    },
    actions: {
      updateIndex({ commit }) {
        BookReader
          .getIndex()
          .then((data) => {
            commit('setIndex', data.data);
          });
      }
    }
  });
}
