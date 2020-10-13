<template>
    <h1>page</h1>
</template>

<script>
    export default {
        name: "Page"
        , created() {
            const {id, title} = this.$route.query;
            console.log(id, title);
        }
    }
</script>

<style scoped>

</style>