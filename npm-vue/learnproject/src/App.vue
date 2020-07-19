<template>
    <div id="app">
        <a v-bind:[attributeName]="url"> ... </a>
        <a v-bind:[attrName]="url">dynamic (attr & attr value)</a>
        <div v-on:[actionName]="click">dynamic (attr & attr value)</div>
        <div>{{url}}</div>
    </div>
</template>

<script>
    export default {
        name: 'App'
        , data() {
            return {
                attrName: 'href'
                , attributeName: 'href'
                , url: '//baidu.com'
                , actionName: 'click'
            };
        }
        , methods: {
            click: () => {
                console.log(1);
            }
        }
        , props: {}
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
