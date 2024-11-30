const LibroService = require("../services/LibroService");

class Libro {
  static async obtenerLibros(req, res){
    try{
      let result = await LibroService.obtenerLibros();
      if(!result){
        throw new Error("No hay registros");
      }else{
        console.log("Trajo todo")
        res.json({result});
      }
    } catch(error) {
      console.log(error)
      res.json({error: error.message});
    }
  }
  static async crearLibro(req, res){
    try{
      let result = await LibroService.crearLibro(req.body);
      if(!result){
        throw new Error("No se pudo crear el usuairo, hubo un error");
      }else{
        console.log(result);
        res.json({result});
        return result;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarLibro(req, res){
    try{
      let result = await LibroService.actualizarLibro(req.params.id, req.body);
      if(!result){
        throw new Error("No existe el usuario")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarLibro(req, res){
    try{
      let result = await LibroService.eliminarLibro(req.params.id);
      if(result.resp == false){
        throw new Error("No existe el libro");
      }else{
        res.json({msg: "Se elimino correctamente el usuario"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerLibro(req, res){
    try{
      let result = await LibroService.obtenerLibro(req.params.id);
      if(!result){
        throw new Error("El libro no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
  
}

module.exports = Libro;