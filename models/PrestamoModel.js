let DataTypes = require("sequelize"),
  Sequelize = require("../config/database");
const Usuario = require("./UsuarioModel");
const Libro = require("./LibroModel");

const Prestamo = Sequelize.define("Prestamo", {
  fechaPrestamo:{
    type: DataTypes.DATE,
    allowNull: true
  },
  fechaDevolucion:{
    type: DataTypes.DATE,
    allowNull: true
  },
  estado:{
    type: DataTypes.BOOLEAN,
    default: false
  },
  registroPrestamo:{
    type: DataTypes.DATE,
    default: DataTypes.NOW
  },
  idUsuario:{
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  idLibro:{
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{
  timestamps:false,
  tableName: "prestamo"
});

Prestamo.belongsTo(Libro, {
  foreignKey: "idLibro"
});

//relacion 1 a muchos de prestamo a usuario
Prestamo.belongsTo(Usuario, {
  foreignKey: "idUsuario"
});


module.exports = Prestamo;