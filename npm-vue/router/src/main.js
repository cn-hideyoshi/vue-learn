import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    // if (to.path === '/node') {
    //     let is_login = JSON.parse(localStorage.getItem('user'));
    //     if (!is_login){
    //         next('/login');
    //         return
    //     }
    // }
    // next();

    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!localStorage.getItem('user')) {
            next({
                path: '/login'
            })
            return;
        }
    }
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
