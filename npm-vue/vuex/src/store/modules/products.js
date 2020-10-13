import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: []
    }
    , getters: {}
    , mutations: {
        getAllProduct(state, results) {
            state.products = results;
        }
    }
    , actions: {
        async getAllProduct({commit}) {
            try {
                const res = await axios.get('/api/products');
                const results = res.data.results
                commit('getAllProduct', results)
            } catch (e) {
                console.error(e);
            }
        }
    }

}