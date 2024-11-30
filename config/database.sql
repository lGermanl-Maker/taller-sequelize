CREATE DATABASE DBbiblioteca;

USE DBbiblioteca;

CREATE TABLE libro(
  id INT AUTO_INCREMENT NOT NULL,
  titulo VARCHAR(150) NOT NULL UNIQUE,
  autor VARCHAR(150) NOT NULL,
  disponibilidad boolean DEFAULT true,
  anioPublicacion YEAR(4) NOT NULL,
  cantidadTotal INT NOT NULL,
  PRIMARY KEY (id)
);

/*
el atributo estado sera booleano, true para saber que esta en uso y false para saber que esta disponible
*/
CREATE TABLE prestamo(
  id INT AUTO_INCREMENT NOT NULL,
  fechaPrestamo DATE NOT NULL,
  fechaDevolucion DATE NOT NULL,
  estado BOOLEAN DEFAULT false,
  registroPrestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  idUsuario INT NOT NULL,
  idLibro INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE,
  FOREIGN KEY (idLibro) REFERENCES libro(id) ON DELETE CASCADE
);


CREATE TABLE usuario (
  id INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(80) NOT NULL,
  apellido VARCHAR(80) NOT NULL,
  email VARCHAR(100) NOT NULL,
  direccion VARCHAR(30) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  permitido BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);