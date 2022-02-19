export default {
  setList(state: any, payload: []) {
    state.list = payload;
  },
  time(state: any, payload: string) {
    state.time = payload;
  },
}