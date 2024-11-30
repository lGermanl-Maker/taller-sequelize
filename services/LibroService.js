const Libro = require("../models/LibroModel");

class LibroService {
  static async obtenerLibros(){
    try{
      let result = await Libro.findAll();
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearLibro(body){
    try{
      let result = await Libro.create(body);
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarLibro(id, body){
    try{

      /*let [result] = await Libro.update(body, {
        where: {id}
      });*/
      let existsLibro = await Libro.findByPk(id);
      if(!existsLibro){
        throw new Error("No se encontraron resultados");
      }else{
        let libroUpdate = await existsLibro.update(body, {
          where: {id}
        });
        await libroUpdate.save();
        console.log("Se actualizo")
        return existsLibro;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarLibro(id){
    try{
      let existsLibro = await Libro.findByPk(id);
      if(existsLibro == null){
        throw new Error("No se encontraron resultados");
      }else{
        let libroEliminado = await existsLibro.destroy();
        await libroEliminado.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerLibro(id){
    try{
      let result = await Libro.findByPk(id);
      if(!result){
        throw new Error("Libro no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = LibroService;