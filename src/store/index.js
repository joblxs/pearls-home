import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    // 定义state属性
    theme: 'light',
    color: '#000'
  }),
  mutations: {
    // 定义mutations
    setTheme(state, newTheme) {
      state.theme = newTheme;
    },
    setColor(state, newColor) {
      state.color = newColor;
    }
  },
  actions: {
    setTheme({ commit }, newTheme) {
      commit('setTheme', newTheme);
    },
    setColor({ commit }, newColor) {
      commit('setColor', newColor);
    }
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
    getColor(state) {
      return state.color;
    },
  }
});