import { createStore } from 'vuex'
import List from '@/store/List'

export default createStore({
  state: {
    globalErr: null,
  },
  getters: {
    globalErr: (state: any) => {
      return state.globalErr;
    },
  },
  mutations: {
    setGlobalErr(state: any, payload: string) {
      state.globalErr = payload;
    }
  },
  actions: {
  },
  modules: {
    List
  }
})
