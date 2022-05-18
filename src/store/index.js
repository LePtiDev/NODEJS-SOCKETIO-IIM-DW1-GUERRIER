import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    files: []
  },
  getters: {
    getFilesData(state){
      return state.files
    }
  },
  actions: {
    getFilesAction({ commit }, payload) {
      commit("getFiles", payload);
    },
  },
  mutations: {
    getFiles(state) {
    axios.get("http://localhost:3000/")
      .then(response => (state.files = response.data))
    },
  }
})

export default store
