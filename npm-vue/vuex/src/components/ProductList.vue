<template>
    <div>
        <h1>
            simple store
        </h1>
        <ul>
            <li v-for=" (product) in products" :key="product.id">
                <!--currency => main.js-->
                {{product.title}} - {{product.price | currency}}
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
    }
</script>

<style scoped>

</style>