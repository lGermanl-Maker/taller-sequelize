const PrestamoService = require("../services/PrestamoService");

class PrestamoController {
  static async obtenerPrestamos(req, res){
    try{
      let result = await PrestamoService.obtenerPrestamos();
      res.json(result);
    } catch(error) {
      console.log(error)
    }
  }
  static async crearPrestamo(req, res){
    try{
      let result = await PrestamoService.crearPrestamo(req.body);
      if(!result){
        throw new Error("No se pudo crear el prestamo, hubo un error");
      }else{
        console.log(result);
        res.json({result});
        return result;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarPrestamo(req, res){
    try{
      let result = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
      if(!result){
        throw new Error("No existe el prestamo")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarPrestamo(req, res){
    try{
      let result = await PrestamoService.eliminarPrestamo(req.params.id);
      if(result.resp == false){
        throw new Error("No existe el prestamo");
      }else{
        res.json({msg: "Se elimino correctamente el prestamo"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerPrestamo(req, res){
    try{
      let result = await PrestamoService.obtenerPrestamo(req.params.id);
      if(!result){
        throw new Error("El Prestamo no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
  static async catalogo(req, res){
    try{
      let result = await PrestamoService.catalogo();
      res.json(result);
    } catch(error) {
      res.json({err: error})
    }
  }
  static async informeLibros(req, res){
    try{
      let result = await PrestamoService.informeLibros();
      const contador = result.reduce((acc, prestamo) => {
        acc[prestamo.idLibro] = (acc[prestamo.idLibro] || 0) + 1;
        return acc;
      }, {});

      const repetidos = result.filter((prestamo) => contador[prestamo.idLibro] > 1);

      res.json(repetidos)
    } catch(error) {
      res.json({err: error})
    }
  }
  static async prestamosRecientes(req, res){
    try{
      let result = await PrestamoService.prestamosRecientes();
      res.json(result)
    } catch(error) {
      res.json({err: error})
    }
  }
}

module.exports = PrestamoController;