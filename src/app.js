const express = require("express");
const app = express();
const path = require("path");


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));
//Para que pueda tomar el body de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// --Routes--

// Main routes
const mainRouter = require("./routes/mainRouter.js")
app.use("/", mainRouter);

// Users routes
const usersRouter = require("./routes/usersRouter.js");
app.use("/users", usersRouter);

// Products routes
const productsRouter = require("./routes/productsRouter.js");
app.use("/products", productsRouter);


app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en el puerto http://localhost:4000");
});

