import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            name: 'login',
            path: '/',
            component: Login
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