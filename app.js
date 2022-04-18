const express = require("express");
const app = express();
const path = require("path");

let publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en el puerto http://localhost:4000");
});

// ----- HOME -----
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

// ----- LOGIN -----
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

// ----- REGISTRO -----
app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

// ----- CATÁLOGO -----
app.get("/catalogo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/catalogo.html"));
});

// ----- DETALLE DEL PRODUCTO -----
app.get("/detalle-producto-jack-nicholson", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-jack-nicholson.html")
  );
});
app.get("/detalle-producto-sylvester-stallone", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-sylvester-stallone.html")
  );
});
app.get("/detalle-producto-steven-spielberg", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-steven-spielberg.html")
  );
});
app.get("/detalle-producto-mi-pobre-angelito", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-mi-pobre-angelito.html")
  );
});
app.get("/detalle-producto-pulp-fiction", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-pulp-fiction.html")
  );
});
app.get("/detalle-producto-marty-mcfly", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-marty-mcfly.html")
  );
});
app.get("/detalle-producto-jules-and-vincent", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto-jules-and-vincent.html")
  );
});
// ----- CARRITO DE COMPRAS -----
app.get("/carrito-de-compras", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito-de-compras.html"));
});

// ----- CONTACTO -----
app.get("/contacto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/contacto.html"));
});
