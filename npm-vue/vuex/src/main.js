import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// add filter
Vue.filter('currency', (value) => {
    return '￥' + value;
})

// global component
// import CartList from "@/components/CartList";
// Vue.component(CartList.name,CartList)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
