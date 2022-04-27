const express = require("express");
const app = express();

const path = require("path");
const mainRouter = require("./routes/mainRouter.js")

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use("/", mainRouter);



app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en el puerto http://localhost:4000");
});



/* 
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
app.get("/detalle-producto", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./views/detalle-producto.html")
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
 */