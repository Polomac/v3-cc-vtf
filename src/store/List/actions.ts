import postsApi from '../../apis/posts/';
export default {
  async getList({commit}: { commit: Function }, payload: any) {
    console.log('fired')
    try {
      const resp = await postsApi.getPosts();
      setTimeout(() => {
        commit('setList', resp.data)
      }, 1000)
    }
    catch(e) {
      commit('setGlobalErr', e.message, { root: true })
    }
  },
}