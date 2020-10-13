<template>
    <div class="home">
        {{getCount}}
        <br>
        {{myCount}}
        <br>
        {{evenOrOdd}}
        <br>
        {{myName}}
        <br>
        <button @click="incCount">+1</button>
        <button @click="incCountAsync">Async +1</button>
        <hr>
        <CartList></CartList>
        <hr>
        <ProductList></ProductList>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    import CartList from "@/components/CartList";
    import ProductList from "@/components/ProductList";

    export default {
        name: 'Home'
        , components: {
            CartList
            , ProductList
        }
        , computed: {
            // ...mapState(["count"])
            ...mapState({
                myCount: "count",
                myName: "userName"
            }),
            // evenOrOdd() {
            //     return this.$store.getters.evenOrOdd;
            // },
            ...mapGetters(['evenOrOdd']),
            ...mapGetters('cart', ['getCount'])
        }
        , methods: {
            // incCount() {
            //     this.$store.dispatch('incCount')
            // },
            incCountAsync() {
                this.$store.dispatch('incCountAsync', {
                    amount: 10
                });
            },
            ...mapActions(['incCount'])
        }
    }
</script>
