import { createStore } from 'vuex'
import * as API from '../services/APIService'; "../services/APIService";

const store = createStore({
  state () {
    return {
      data: [],
      selectedItem: null,
      captionRes: null,
      theme: "LIGHT"
    }
  },
  mutations: {
      setTheme(state, payload){
        state.theme = payload;
      },
      setSelectedItem(state, item){
        state.selectedItem = item;
      },
      clearCaptionRes(state){
        state.captionRes = null;
      },
      async loadMemes(state){
        state.data = await API.get();
      },
      async captionMeme(state, payload){
        const boxes = payload.textBoxes.map(el => ({text: el}));
        const data = {
                        template_id: payload.template_id
                    };
    
        const formData = new URLSearchParams();
        Object.keys(data).forEach( key => {
            formData.append(key, data[key]);
        });
    
        for (let i = 0; i < boxes.length; i++){
            Object.keys(boxes[i]).forEach(key =>{
                formData.append(`boxes[${i}][${key}]`, boxes[i][key]);
            });
        }
        state.captionRes = await API.post(formData);
      }
  },
  getters: {
      getTheme(state){
          return state.theme;
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