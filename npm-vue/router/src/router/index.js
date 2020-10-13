import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    }
    , {
        path: '/home',
        name: 'Home',
        component: Home,
        //rename url
        alias: '/aaa'
    }
    , {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
    }
    , {
        path: '/user/:id',
        name: 'User',
        component: () => import('@/views/User')
    }
    , {
        path: '/user-*',
        component: () => import('@/views/User-admin')
    }
    , {
        path: '/page',
        name: 'Page',
        component: () => import('@/views/Page')
    }
    , {
        path: '*',
        component: () => import('@/views/404')
    }
]

const router = new VueRouter({
    // history=>url delete /#/
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
