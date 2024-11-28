import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nprogress'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/IndexHome.vue')
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