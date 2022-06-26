const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola desde mi App con Express.js!'));

app.get('/productos', (req,res) => { 
    res.json([{
        nombre: 'Monitor',
        precio: '$500',
        cantidad: '1'
    }, {
        nombre: 'Teclado',
        precio: '$100',
        cantidad: '2'
    }]);
});

app.get('/productos/:id', (req, res) => {
    const { id } =req.params;
    res.json({
        id: id,
        nombre: 'Monitor',
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
