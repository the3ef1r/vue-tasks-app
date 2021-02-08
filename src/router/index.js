import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Create',
        component: () => import(/* webpackChunkName: "create" */ '../views/Main.vue')
    },
    {
        path: '/list',
        name: 'List',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
    },
    {
        path: '/task/:id',
        name: 'Task',
        component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
