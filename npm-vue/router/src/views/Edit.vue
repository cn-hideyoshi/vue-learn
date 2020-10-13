<template>
    <div>
        <label><textarea v-model="content"></textarea></label>
        <button @click="saveBtn">save</button>
        <ul>
            <li v-for="item in list">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Edit"
        , data() {
            return {
                list: [],
                content: '',
            }
        }
        , watch: {
            '$route': () => {

            }
        }
        , beforeRouteEnter(to, from, next) {
            console.log('enter');
            next();
        }
        , beforeRouteUpdate(to, from, next) {

            console.log('update');
            next();
        }
        , beforeRouteLeave(to, from, next) {
            console.log('leave');
            if (this.content) {
                alert('are u sure leave this page?')
                next(false)
                return;
            }
            next()
        }
        , methods: {
            saveBtn() {
                this.list.push({
                    title: this.content
                })
                this.content = '';
            }
        }
    }
</script>

<style scoped>
    label {
        display: block;
    }

    textarea {
        height: 200px;
        width: 300px;
    }
</style>