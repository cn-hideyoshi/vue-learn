export default {
    namespaced: true,
    state: {
        count: 0,
        cartList: []
    }
    , getters: {
        getCount(state) {
            return state.count;
        },
        getCartList(state, getters, rootState) {
            return state.cartList.map(({id, quantity}) => {
                let product = rootState.products.products.find(item => item.id === id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: quantity,
                }
            })
        },
        getCartTotalPrice(state, getters) {
            return getters.getCartList.reduce((total, product) => {
                return total + (product.price * product.quantity)
            }, 0);
        }
    }
    , mutations: {
        addToCart(state, {id, quantity}) {
            state.cartList.push({
                id,
                quantity
            })
        },
        addItemQuantity(state, {id}) {
            let product = state.cartList.find(item => item.id === id);
            product.quantity++;
        }
    }
    , actions: {
        addToCart({commit, state}, product) {
            if (product.inventory > 0) {
                let carItem = state.cartList.find(item => item.id === product.id);
                if (!carItem) {
                    commit('addToCart', {id: product.id, quantity: 1})
                } else {
                    commit('addItemQuantity', {id: product.id})
                }

                //commit product module {root:true}
                commit('products/decProductInventory', {id: product.id}, {root: true})
            } else {
                console.error('no storage')
            }
        }
    }
}