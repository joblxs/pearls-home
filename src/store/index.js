import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    // 定义state属性
    theme: 'light',
    color: '#000',
    background: true
  }),
  mutations: {
    // 定义mutations
    setTheme(state, newTheme) {
      state.theme = newTheme;
    },
    setColor(state, newColor) {
      state.color = newColor;
    },
    setBackground(state, background) {
      state.background = background;
    }
  },
  actions: {
    setTheme({ commit }, newTheme) {
      commit('setTheme', newTheme);
    },
    setColor({ commit }, newColor) {
      commit('setColor', newColor);
    },
    setBackground({ commit }, background) {
      commit('setBackground', background);
    }
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
    getColor(state) {
      return state.color;
    },
    getBackground(state) {
      return state.background;
    },
  }
});