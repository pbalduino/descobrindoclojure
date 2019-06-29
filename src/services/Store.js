/* eslint-disable */
import Vuex from 'vuex'
import BookLoader from '@/services/BookLoader'

export default () => {
  return new Vuex.Store({
    state: {
      index: {},
      book: []
    },
    mutations: {
      setIndex(state, newIndex) {
        state.index = newIndex
      }
    },
    actions: {
      updateIndex({ commit }) {
        BookLoader
          .getIndex()
          .then(async ({ data }) => {
            let chapters = data.locations.map(async (file) => {
              const result = await BookLoader.readFile(file)
              console.log(file, result.data)
              return result.data
            })

            const resolvedChapter = await Promise.all(chapters); // resolving all promises
            return resolvedChapter
          })
          .then((data) => {
            console.log("ok", data);
          });
      }
    }
  });
}
