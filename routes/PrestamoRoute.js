const route = require("express").Router();
const PrestamoController = require("../controllers/PrestamoController");

route.get("/prestamo", PrestamoController.obtenerPrestamos);
route.post("/prestamo", PrestamoController.crearPrestamo);
route.put("/prestamo/:id", PrestamoController.actualizarPrestamo);
route.delete("/prestamo/:id", PrestamoController.eliminarPrestamo);
route.get("/prestamo/:id", PrestamoController.obtenerPrestamo);
route.get("/catalogo", PrestamoController.catalogo);
route.get("/informe-libros", PrestamoController.informeLibros);
route.get("/prestamos-recientes", PrestamoController.prestamosRecientes);

module.exports = route;