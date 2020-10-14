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
        },
        decProductInventory(state, {id}) {
            let product = state.products.find(item => item.id === id)
            product.inventory--;
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
        },
    }

}