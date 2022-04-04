const express = require('express');
const app = express();

app.get('/',(req, res)=>{
res.send('Hello World')
});

app.get('/clientes',(req, res)=>{
    res.send('<h1> { Marcelo Mendoza Suarez, 26 años ,marcelo.mendoza@gmail.com,983456000}, { Milagros Gutierrez Dominguez,30 años,milagros.dominguez@gmail.com,993093000}, {Ana Juarez Cortez,45 años,ana.juarez@gmail.com,983456000 }</h1>');
     
    });

app.get('/productos',(req, res)=>{
    res.send('<h1>{Refrigerador, Precio : 1500 S/. , Stock:20 }, {Laptop Lenovo ,Precio : 3000 S/., Stock: 10} , { Tablet ,Precio: 1200 S/.,Stock : 9 }</h1>')
    });

app.listen(5000, ()=>{
    console.log('Servidor en el puerto 5000');
});