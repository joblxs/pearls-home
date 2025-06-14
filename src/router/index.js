import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nprogress'
import NotFound from '../components/error/404.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/IndexHome.vue')
    },
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    start();
    next();
});

router.afterEach(() => {
    close()
})

export default router;