const express = require('express');
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola desde mi App con Express.js!'));

app.get('/productos', (req,res) => { 
   const productos = []
   const { size } = req.query;
   const limit = size || 10 
    for (let i = 0; i < limit; i++) {
        productos.push({
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            descripcion: faker.commerce.productDescription(),
            image: faker.image.imageUrl()
        });
    }
    res.json(productos);
});

app.get('/productos/:id', (req, res) => {
    const { id } =req.params;
    res.json({
        id: id,
        nombre: faker.commerce.product(),
        precio: '$500',
        cantidad: '1'
    });
})

app.get('/categorias/:categoriaId/productos/:productoId', (req, res) => {
    const { categoriaId, productoId } = req.params;
    res.json({
        categoriaId,
        productoId
    
    });

})

// http://localhost:3000/usuarios?limit=10&offset=200
app.get('/usuarios', (req,res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.json({
            limit: 'No se ha especificado limit',
            offset: 'No se ha especificado offset'
        });
    }
})

app.listen(port, () => console.log(`Escuchando al puerto ${port}!`));
