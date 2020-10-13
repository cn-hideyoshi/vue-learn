<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/user">User</router-link>
            |
            <router-link to="/user-admin">User-admin</router-link>
            |
            <router-link to="/user/1/profile">User/profile</router-link>
            |
            <router-link to="/user/1/posts">User/posts</router-link>
            |
            <router-link to="/node">Node</router-link>


            <br>
            <!--name change-->
            <router-link :to="{name:'Home'}">Home</router-link>
            |
            <router-link :to="{name:'About'}">About</router-link>
            |
            <router-link :to="{name:'User',params:{id:1}}">User</router-link>
            |
            <router-link :to="{name:'Page',query:{id:1,title:'foo'}}">Page</router-link>
            |
            <router-link :to="{name:'Edit'}">Edit</router-link>
            |
            <router-link :to="{name:'Blog'}">Blog</router-link>
            |
            <router-link :to="{name:'Post'}">Post</router-link>
        </div>
        <!--router-view-->
        <!--default home-->
        <router-view/>
        <router-view name="main"/>
        <router-view name="sidebar"/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
