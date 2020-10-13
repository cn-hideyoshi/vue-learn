<template>
    <div>
        <h1>User {{$route.params.id}}</h1>
        <h1>{{id}}</h1>
        <button @click="goHome">back to home</button>
        <button @click="goBack">go back</button>
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: "User"
        , watch: {}
        , props: ['id']
        , methods: {
            goHome() {
                // this.$router.push('/home');
                // this.$router.push({path: '/home'});
                // this.$router.push('Home');
                // this.$router.push({name: 'Home'});
                this.$router.push({
                    name: 'User',
                    params: {id: 2}
                })
            }
            , goBack() {
                this.$router.go(-1);
                // this.$router.go(1);
            }
        }
    }
</script>

<style scoped>

</style>