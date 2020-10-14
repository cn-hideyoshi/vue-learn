<template>
    <div>
        <h1>
            simple store
        </h1>
        <ul>
            <li v-for=" (product) in products" :key="product.id">
                <!--currency => main.js-->
                {{product.title}} - {{product.price | currency}}
                <button :disabled="!product.inventory" @click="addToCart(product)">addToCart</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "ProductList"
        , computed: {
            ...mapState('products', ['products'])
        }
        , created() {
            this.$store.dispatch('products/getAllProduct')
        }
        , methods: {
            ...mapActions('cart', ['addToCart'])
        }
    }
</script>

<style scoped>

</style>