import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Apps from './components/Apps'

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            name: 'login',
            path: '/',
            component: Login
        },
        {
            name: 'apps',
            path: '/apps',
            component: Apps
        },       
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
    ],
})