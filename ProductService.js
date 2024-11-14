const express = require('express');
const app = express();
app.use(express.json());


const prouducts = [{
    id: 1,
    name: 'Product 1',
    userId: 1,
    price: 100,
},
{
    id: 2,
    name: 'Product 2',
    userId: 2,
    price: 200,
}];

app.get('/products', (req, res) => {
    res.send(products)
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) res.status(404).send('The product with the given ID was not found.');
    res.send(product);
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
})
