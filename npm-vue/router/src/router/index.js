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
        // component: Home,
        components: {
            default: Home,
            main: () => import('@/views/Main'),
            sidebar: () => import('@/views/Sidebar')
        },
        //rename url
        alias: '/aaa',
    }
    , {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
    }
    , {
        path: '/user/:id',
        name: 'User',
        component: () => import('@/views/User'),
        // props:true,
        props: (router) => ({
            id: router.params.id
        }),
        children: [
            {
                path: 'profile',
                component: () => import('@/views/Profile')
            }
            , {
                path: 'Posts',
                component: () => import('@/views/Posts')
            }
        ]
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
        path: '/node',
        name: 'Node',
        component: () => import('@/views/Node'),
        meta: {
            requireAuth: true,
        }
    }
    , {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
    }
    , {
        path: '/edit',
        name: 'Edit',
        component: () => import('@/views/Edit')
    }
    , {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog'),
        meta: {
            requireAuth: true,
        }
    }
    , {
        path: '/post',
        name: 'Post',
        component: () => import('@/views/Post')
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
