const express = require ("express");
const app = express ();
const path = require ("path");
const methodOverride = require('method-override');
const session = require ("express-session");
const cookieParser = require('cookie-parser');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middlewares

app.use(express.static("public"));
//Para que pueda tomar el body de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

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

// Listen to server for server up!
app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en el puerto http://localhost:4000");
});

