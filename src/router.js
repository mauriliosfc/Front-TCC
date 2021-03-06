import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Welcome from './components/welcome'
import Descricao from './components/descricao'
Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            name: 'descricao',
            path: '/descricao',
            component: Descricao
        },
        {
            name: 'welcome',
            path: '/',
            component: Welcome
        },
        {
            name: 'login',
            path: '/login',
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