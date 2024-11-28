import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Layui from '@layui/layui-vue'
import store from './store';
import 'animate.css';
import '@layui/layui-vue/lib/index.css';

const app = createApp(App);

app.use(router);
app.use(Layui);
app.use(store);
app.mount('#app');
