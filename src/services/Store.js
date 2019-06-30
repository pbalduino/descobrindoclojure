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
      },
      setBook(state, newBook) {
        state.book = newBook
      }
    },
    actions: {
      updateIndex({ commit }) {
        BookLoader
          .getIndex()
          .then(async ({ data }) => {
            let chapters = data.locations.map(async (file) => {
              const result = await BookLoader.readFile(file)
              return result.data
            })

            const resolvedChapter = await Promise.all(chapters);
            return resolvedChapter
          })
          .then((data) => {
            return data.reduce((acc, {tag, content}) => {
              if(tag !== "document") {
                console.error("Not a document. Failing");
                throw "Not a document"
              }
              let chapter = {name: (content[0].content ? content[0].content[0].content[0] : "").trim()}
              console.log(acc, content, chapter)
              acc.push(chapter)
              return acc
            }, [])
          })
          .then((data) => {
            console.log("commit", data)
            commit('setBook', data)
          })
      }
    }
  })
}
