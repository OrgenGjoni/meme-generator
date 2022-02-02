import { createStore } from 'vuex'
import * as API from '../services/APIService'; "../services/APIService";

const store = createStore({
  state () {
    return {
      data: [],
      selectedItem: null,
      captionRes: null
    }
  },
  mutations: {
      increment(state){
          state.count++;
      },
      setSelectedItem(state, item){
        state.selectedItem = item;
      },
      async loadMemes(state){
        state.data = await API.get();
      },
      async captionMeme(state, payload){
        state.captionRes = await API.post(payload);
      }
  },
  getters: {
      getCount(state){
          return state.count;
      },
      getData(state){
          return JSON.parse(JSON.stringify(state.data));
      },
      getSelectedItem(state){
          return JSON.parse(JSON.stringify(state.selectedItem));
      },
      getCaptionRes(state){
        return JSON.parse(JSON.stringify(state.captionRes));
      }
  }
});

export {store};