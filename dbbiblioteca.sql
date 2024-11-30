-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2024 a las 07:01:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbbiblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `autor` varchar(150) NOT NULL,
  `disponibilidad` tinyint(1) DEFAULT 1,
  `anioPublicacion` year(4) NOT NULL,
  `cantidadTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `titulo`, `autor`, `disponibilidad`, `anioPublicacion`, `cantidadTotal`) VALUES
(2, 'Cien años', 'Gabriel Marques', 1, '1970', 10),
(3, 'Mariposas', 'El', 1, '1970', 5),
(4, 'Traicionera', 'Mana', 1, '1970', 5),
(5, 'EL Atarban', 'Molano', 1, '1970', 8),
(6, 'El Andariego', 'Jonny Rivera', 1, '1970', 8),
(7, 'Nadie Es Eterno', 'Dario Gomez', 1, '1970', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `id` int(11) NOT NULL,
  `fechaPrestamo` date NOT NULL,
  `fechaDevolucion` date NOT NULL,
  `estado` tinyint(1) DEFAULT 0,
  `registroPrestamo` timestamp NOT NULL DEFAULT current_timestamp(),
  `idUsuario` int(11) NOT NULL,
  `idLibro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prestamo`
--

INSERT INTO `prestamo` (`id`, `fechaPrestamo`, `fechaDevolucion`, `estado`, `registroPrestamo`, `idUsuario`, `idLibro`) VALUES
(2, '2024-11-26', '2024-11-26', 0, '2024-11-26 01:34:15', 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `permitido` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `direccion`, `fecha_creacion`, `permitido`) VALUES
(2, 'Juan', 'Moriones', 'juan@juan.com', 'Cll 98', '2024-11-29 01:34:15', 0),
(3, 'Sebastian', 'Rengifo', 'sebas@sebas.com', 'Cll 97', '2024-11-29 04:22:39', 0),
(4, 'Alison', 'Martinez', 'alison@alison.com', 'Cll 97', '2024-11-29 04:22:52', 0),
(5, 'Melissa', 'RRRR', 'Melissa@Melissa.com', 'Cll 97', '2024-11-29 04:23:04', 0),
(6, 'Angel', 'Vargas', 'Angel@Angel.com', 'Cll 97', '2024-11-29 04:23:15', 0),
(7, 'Cesy', 'Obando', 'Cesy@Cesy.com', 'Cll 97', '2024-11-29 04:23:30', 0),
(8, 'Juan', 'Rengifo', 'Rengifo@Rengifo.com', 'Cll 97', '2024-11-29 04:23:46', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `titulo` (`titulo`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idLibro` (`idLibro`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `prestamo_ibfk_2` FOREIGN KEY (`idLibro`) REFERENCES `libro` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
