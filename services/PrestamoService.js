const Libro = require("../models/LibroModel");
const Prestamo = require("../models/PrestamoModel");
const Usuario = require("../models/UsuarioModel");

class PrestamoService {
  static async obtenerPrestamos(){
    try{
      let result = await Prestamo.findAll({
        include: [
          {
            model: Libro,
            attributes: ["titulo", "autor"]
          },
          {
            model: Usuario,
            attributes: ["nombre", "apellido"]
          }
        ]
      });
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearPrestamo(body){
    try{
      let result = await Prestamo.create(body);
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarPrestamo(id, body){
    try{
      let existPrestamo = await Prestamo.findByPk(id);
      if(!existPrestamo){
        throw new Error("No se encontraron resultados");
      }else{
        let prestamoUpdate = await existPrestamo.update(body, {
          where: {id}
        });
        await prestamoUpdate.save();
        console.log("Se actualizo")
        return existPrestamo;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarPrestamo(id){
    try{
      let existPrestamo = await Prestamo.findByPk(id);
      if(existPrestamo == null){
        throw new Error("No se encontraron resultados");
      }else{
        let prestamoEliminado = await existPrestamo.destroy();
        await prestamoEliminado.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerPrestamo(id){
    try{
      let result = await Prestamo.findByPk(id);
      if(!result){
        throw new Error("Prestamo no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }
  static async catalogo(){
    try{
      let result = await Prestamo.findAll({
        include: [
          {
            model: Libro,
            attributes: ["titulo", "autor", "disponibilidad"]
          }
        ],
        attributes: ["estado", "fechaDevolucion"]
      })
      return result;
    } catch(error) {
      console.log(error)
    }
  }
  static async informeLibros(req, res){
    try {
        const result = await Prestamo.findAll();
        return result;
    } catch (error) {
      console.error(error);
    }
  }
  static async prestamosRecientes(req, res){
    try {
        const result = await Prestamo.findAll({
          order: [
            ['fechaPrestamo', 'DESC']
          ],
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PrestamoService;