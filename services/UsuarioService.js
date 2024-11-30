const Usuario = require("../models/UsuarioModel");

class UsuarioService {
  static async obtenerUsuarios(){
    try{
      let result = await Usuario.findAll();
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearUsuario(body){
    try{
      let result = await Usuario.create(body);
      return result;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarUsuario(id, body){
    try{

      /*let [result] = await Usuario.update(body, {
        where: {id}
      });*/
      let existsUsuario = await Usuario.findByPk(id);
      if(!existsUsuario){
        throw new Error("No se encontraron resultados");
      }else{
        let UsuarioUpdate = await existsUsuario.update(body, {
          where: {id}
        });
        await UsuarioUpdate.save();
        console.log("Se actualizo")
        return existsUsuario;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarUsuario(id){
    try{
      let existsUsuario = await Usuario.findByPk(id);
      if(existsUsuario == null){
        throw new Error("No se encontraron resultados");
      }else{
        let UsuarioEliminado = await existsUsuario.destroy();
        await UsuarioEliminado.save();
        console.log("Se elimino");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerUsuario(id){
    try{
      let result = await Usuario.findByPk(id);
      if(!result){
        throw new Error("Usuario no encontrado");
      }else{
        return result;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = UsuarioService;