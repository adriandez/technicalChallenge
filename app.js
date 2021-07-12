// require express
const express = require("express");
const cors = require("cors");


//require .env
require("dotenv").config();

// require rutas
const routerApi = require("./routes/items");

// declaracion de express
const app = express();
const { sequelize } = require('./utils/database')

// uses para JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", routerApi); // rutas para API

  // Conexion a base de datos
  // force: true => DROP TABLES
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Connected to DB");
      app.listen(process.env.PORT, () => {
        console.log(
          `Example app listening at http://localhost:${process.env.PORT}`
        );
      });
    });