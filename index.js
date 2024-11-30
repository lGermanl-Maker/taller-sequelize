const express = require("express");
const app = express();
const libroRoute = require("./routes/LibroRoute");
const usuarioRoute = require("./routes/UsuarioRoute");
const prestamoRoute = require("./routes/PrestamoRoute");
const sequelize = require("./config/database");

require("dotenv").config();
const PORT = process.env.PORT;

app.use( express.json() );

//2024-11-29T01:34:15.000Z
//Rutas
app.use("/api", libroRoute);
app.use("/api", usuarioRoute);
app.use("/api", prestamoRoute);

const startServerDB = async () => {
  try{
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Corriendo servidor en: http://localhost:${PORT}`));
  } catch(error) {
    console.log(`Error en la Base de Datos: ${error}`);
  }
}

startServerDB();