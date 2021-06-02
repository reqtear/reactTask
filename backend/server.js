const express = require('express') //import syntax(standard JS)
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {//if get '/' call function with (req, res) parameters
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)//converts products from js Array to json and send it
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})
app.listen(5000, console.log('Server running on port 5000'))