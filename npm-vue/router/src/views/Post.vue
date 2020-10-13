<template>
    <div>
        <h1>Post</h1>
        <div v-if="loading" class="loading">loading...</div>
        <div v-if="error" class="error">{{error}}</div>
        <div v-if="postData">
            <h1>title:{{postData.title}}</h1>
            <h1>body:{{postData.body}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post"
        , data() {
            return {
                postData: null
                , error: null
                , loading: false
            }
        }
        , created() {
            console.log(this.$http);
            this.loading = true;
            setTimeout(this.getPostData(), 300)
        }
        , methods: {
            async getPostData() {
                try {
                    const {data} = await this.$http.get('/api/post')
                    console.log(data);
                    this.postData = data;
                    this.loading = false;
                } catch (e) {
                    console.error(e);
                    this.error = JSON.toString(e);
                }
            }
        }
    }
</script>

<style scoped>

</style>