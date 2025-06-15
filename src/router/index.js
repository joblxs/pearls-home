import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nprogress'
import NotFound from '../components/error/404.vue';

const routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/IndexHome.vue')
    },
    // 博客
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../components/blog/BlogIndex.vue')
    },
    {
        path: '/posts/:id',
        name: 'Posts',
        component: () => import('../components/blog/BlogPosts.vue')
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