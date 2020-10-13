module.exports = {
    devServer: {
        before: (app, serve) => {
            app.get('/api/post', (req, res) => {
                res.json({
                    title: 'vue-router:get api data',
                    body: '1.get api data',
                })
            })
        }
    }
}