const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola desde mi App con Express.js!'));

app.get('/productos', (req,res) => { 
    res.json({
        nombre: 'Monitor',
        precio: '$500',
        cantidad: '1'
    });
});

app.listen(port, () => console.log(`Escuchando al puerto ${port}!`));
