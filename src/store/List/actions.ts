import axios from 'axios'
export default {
  async getList({commit}: { commit: Function }, payload: any) {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('setList', resp.data)
    }
    catch(e) {
      commit('setGlobalErr', e.message, { root: true })
    }
  },
}