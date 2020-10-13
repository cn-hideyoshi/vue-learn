<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="incCount">+1</button>
        <button @click="decCount">-1</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home'
        , computed: {
            count() {
                return this.$store.state.count;
            }
        }
        , components: {}
        , methods: {
            incCount() {
                this.$store.dispatch('incCount')
            }
            , decCount() {
                this.$store.dispatch('decCount')
            }
        }
    }
</script>
