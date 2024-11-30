const route = require("express").Router();
const Libro = require("../controllers/LibroController");

route.get("/libro", Libro.obtenerLibros);
route.post("/libro", Libro.crearLibro);
route.put("/libro/:id", Libro.actualizarLibro);
route.delete("/libro/:id", Libro.eliminarLibro);
route.get("/libro/:id", Libro.obtenerLibro);

module.exports = route;