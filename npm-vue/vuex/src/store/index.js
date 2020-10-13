import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        userName: 'Your Name'
    }
    , getters: {
        evenOrOdd(state) {
            return state.count % 2 === 0 ? 'even' : 'odd';
        }
    }
    , mutations: {
        incCount(state, amount = 1) {
            state.count += amount;
        },
        decCount(state) {
            state.count--;
        },

    }
    , actions: {
        incCount({commit}) {
            // commit mutations function
            commit('incCount');
        },
        decCount({commit}) {
            commit('decCount');
        },
        //
        incCountAsync({commit}, {amount}) {
            console.log(amount);
            setTimeout(() => {
                commit('incCount', amount);
            }, 1000)
        }
    }
    , modules: {
        products,
        cart,
    }
})
