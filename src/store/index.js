import { createStore } from 'vuex';

export default createStore({
  modules: {
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
