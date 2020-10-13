const products = [
    {id: 1, title: 'iphone', price: 100, inventory: 10}
    , {id: 2, title: 'iphone pro', price: 200, inventory: 12}
    , {id: 3, title: 'iphone max', price: 300, inventory: 18}
]
module.exports = {
    devServer: {
        before: (app, serve) => {
            app.get('/api/products', (req, res) => {
                res.json({
                    results: products
                })
            })
        }
    }
}