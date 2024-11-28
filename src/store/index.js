import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    // 定义state属性
    theme: 'light',
  }),
  mutations: {
    // 定义mutations
    setTheme(state, newTheme) {
      state.theme = newTheme;
    }
  },
  actions: {
    setTheme({ commit }, newTheme) {
      commit('setTheme', newTheme);
    }
  },
  getters: {
    // 定义getters
    isDarkTheme(state) {
      return state.theme === 'dark';
    }
  }
});