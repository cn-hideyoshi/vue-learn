<template>
    <div>
        <button @click="login"> login</button>
    </div>
</template>

<script>
    export default {
        name: "Login"
        , methods: {
            login() {
                localStorage.setItem('user', JSON.stringify({name: 1}))
                this.$router.push('node')
            }
        }
    }
</script>

<style scoped>

</style>