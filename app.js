const express = require('express');
const app = express();
const path = require('path');

let publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto http://localhost:4000')
})

// ----- HOME -----
app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
app.get('/home', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

// ----- LOGIN -----
app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

// ----- REGISTRO -----
app.get('/registro', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'/views/registro.html'))
})

// ----- GALERIA -----
app.get("/galeria", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/galeria.html"));
  });
  
// ----- DETALLE DEL PRODUCTO -----
app.get("/detalle-del-producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detalle-del-producto.html"));
  });

// ----- CARRITO DE COMPRAS -----
app.get('/carrito-de-compras', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/carrito-de-compras.html'))
})



