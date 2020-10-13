export default {
    namespaced: true,
    state: {
        count: 0,
        cartList: []
    }
    , getters: {
        getCount(state) {
            return state.count;
        }
    }
    , mutations: {}
    , actions: {}
}