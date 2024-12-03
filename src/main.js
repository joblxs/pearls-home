import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Layui from '@layui/layui-vue'
import store from './store';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import 'animate.css';
import '@layui/layui-vue/lib/index.css';

const app = createApp(App);

app.use(router);
app.use(Layui);
app.use(store);
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  }
});
app.mount('#app');
