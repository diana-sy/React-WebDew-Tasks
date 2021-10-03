const express = require('express')
const app = express()
const port = 3000
const productData = require('./data.json');
const cors = require('cors');

// app.get('/', (req, res) => {
//     res.send('Holla!')
// })
app.use(cors());


app.get('/products', (req, res) => {
    res.json(productData);
})

app.post('/products', (req, res) => {
    productData.items.push({
        id: productData.items.length + 1,  
        description: req.body.description,
        seller: req.body.seller,
        price: req.body.price,
        shipping: req.body.shipping,
        arrives: req.body.arrives,
    })

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })