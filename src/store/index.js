import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, value) {
      state.posts = value
    },
  },
  actions: {
    updatePosts({commit}, value) {
      commit('updatePosts', value)
    },
  },
  getters: {
    posts(state) {
      return state.posts;
    }
  },
  modules: {
  }
})
