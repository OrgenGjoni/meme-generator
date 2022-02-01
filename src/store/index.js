import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 1
    }
  },
  mutations: {
      increment(state){
          state.count++;
      },
  },
  getters: {
      getCount(state){
          return state.count;
      }
  }
})

export {store};