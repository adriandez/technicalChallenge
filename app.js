// require express
const express = require("express");
const cors = require("cors");

//require .env
require("dotenv").config();

// require rutas
const routerApi = require("./routes/items");

// declaracion de express
const app = express();

// uses para JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// para añadir acceso a ficheros en carpeta public
app.use("/", routerApi); // rutas para API

// inicializacion del servidor
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
