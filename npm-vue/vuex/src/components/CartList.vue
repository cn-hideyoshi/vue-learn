<template>
    <div>
        <h1>simple cart</h1>
        <ul>
            <li v-for="(item,index) in getCartList" :key="index">
                {{item.title}} - {{item.price | currency}} x {{item.quantity}}
            </li>
        </ul>
        <div>total price : {{getCartTotalPrice | currency}}</div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CartList"
        , created() {

        }
        , computed: {
            ...mapGetters('cart', ['getCartList', 'getCartTotalPrice'])
        }
    }
</script>

<style scoped>

</style>