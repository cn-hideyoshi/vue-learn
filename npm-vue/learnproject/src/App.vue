<template>
    <div id="app">
        <a v-bind:[attributeName]="url"> ... </a>
        <a v-bind:[attrName]="url">dynamic (attr & attr value)</a>
        <div v-on:[actionName]="click">dynamic (attr & attr value)</div>
        <div>{{url}}</div>
        <test :child="msg"></test>
    </div>
</template>

<script>
    import test from "@/components/Test";

    export default {
        name: 'App'
        , data() {
            return {
                attrName: 'href'
                , attributeName: 'href'
                , url: 'https://www.baidu.com/'
                , actionName: 'click'
                , msg: "hello"
            };
        }
        , components: {
            test
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
