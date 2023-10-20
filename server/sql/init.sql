-- Crear la base de datos 'empleados' si no existe
CREATE DATABASE IF NOT EXISTS empleados;

-- Usar la base de datos 'empleados'
USE empleados;

-- Crear la tabla 'empleados'
CREATE TABLE IF NOT EXISTS empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    pais VARCHAR(255),
    cargo VARCHAR(255),
    anios INT
);