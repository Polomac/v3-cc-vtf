import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  /* eslint-disable */
  state: () => ({
    list: [],
    time: null,
  }),
  mutations,
  actions,
  getters,
};