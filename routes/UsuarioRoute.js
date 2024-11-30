const route = require("express").Router();
const Usuario = require("../controllers/UsuarioController");

route.get("/usuario", Usuario.obtenerUsuarios);
route.post("/usuario", Usuario.crearUsuario);
route.put("/usuario/:id", Usuario.actualizarUsuario);
route.delete("/usuario/:id", Usuario.eliminarUsuario);
route.get("/usuario/:id", Usuario.obtenerUsuario);

module.exports = route;