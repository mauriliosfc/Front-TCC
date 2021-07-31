import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Apps from './components/Apps'
import Welcome from './components/welcome'
import Descricao from './components/descricao'
import Timeline from './components/timeline'
import Consult from './components/Consult'
import ConsultDetail from './components/ConsultDetail'
import Contato from './components/contato'
import Estatiticas from './components/estatiticas'

Vue.use(VueRouter)


export default new Router({
    routes: [{
            name: 'contato',
            path: '/contato',
            component: Contato
        },
        {
            name: 'Consult',
            path: '/consult',
            component: Consult
        },
        {
            name: 'consult-detail',
            path: '/consult-detail',
            component: ConsultDetail
        },
        {
            name: 'Estatiticas',
            path: '/estatiticas',
            component: Estatiticas
        },
        {
            name: 'timeline',
            path: '/timeline',
            component: Timeline
        },
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