import { createRouter, createWebHashHistory } from "vue-router";

// 创建一个路由器
export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('@/pages/Home'),
            meta: {
                title: '首页'
            }
        },
    ]
});