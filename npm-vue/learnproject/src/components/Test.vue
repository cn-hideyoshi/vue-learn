<template>
    <h1>
        test
        {{child}}
    </h1>
</template>

<script>
    export default {
        name: "Test"
        , data() {
            return {
                msg: 1,
                child: 2
            }
        }
        , props: [
            'child'
        ]
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>