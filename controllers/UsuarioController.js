const UsuarioService = require("../services/UsuarioService");

class Usuario {
  static async obtenerUsuarios(req, res){
    try{
      let result = await UsuarioService.obtenerUsuarios();
      if(!result){
        throw new Error("No hay registros");
      }else{
        res.json(result);
      }
    } catch(error) {
      console.log(error)
      res.json({error: error.message});
    }
  }
  static async crearUsuario(req, res){
    try{
      let result = await UsuarioService.crearUsuario(req.body);
      if(!result){
        throw new Error("No se pudo crear el usuario, hubo un error");
      }else{
        console.log(result);
        res.json({result});
        return result;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarUsuario(req, res){
    try{
      let result = await UsuarioService.actualizarUsuario(req.params.id, req.body);
      if(!result){
        throw new Error("No existe el usuario")
      }else{
        res.json({result});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarUsuario(req, res){
    try{
      let result = await UsuarioService.eliminarUsuario(req.params.id);
      if(result.resp == false){
        throw new Error("No existe el Usuario");
      }else{
        res.json({msg: "Se elimino correctamente el usuario"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerUsuario(req, res){
    try{
      let result = await UsuarioService.obtenerUsuario(req.params.id);
      if(!result){
        throw new Error("El Usuario no existe");
      }else{
        res.json(result);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
}

module.exports = Usuario;