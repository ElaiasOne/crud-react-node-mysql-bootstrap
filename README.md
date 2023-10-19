# Gestión de Empleados

Este proyecto implementa un CRUD completo para gestionar empleados, utilizando React para el frontend, Node.js para el backend, MySQL como base de datos y Bootstrap para el diseño.

## Estructura del Proyecto

El proyecto está organizado en carpetas separadas para el cliente (`client`) y el servidor (`server`).

## Configuración Cliente

1. Vea a la carpeta (`client`):
    ```bash
   cd client

2. Instala las dependencias:
    npm install

3. Inicia la aplicación:
    npm start

La aplicación estará disponible en http://localhost:3000.

## Configuración server

1. Vea a la carpeta (`client`):
    ```bash
   cd server

2. Instala las dependencias:
    npm install

3. Inicia la aplicación:
    node index.js

El servidor estará escuchando en http://localhost:3001.

## Configurar base de datos

Asegurate de tener MySQL instalado y configurar las credenciales en el archivo server/index.js.

1. Crear base de datos llamada (`empleados`).

2. Crear una tabla llamada (`empleados`) que contenga (`id, nombre, edad, pais, cargo, anios`).

## Tecnologias Utilizadas

**Cliente:**

- React
- Axios para realizar solicitudes HTTP
- Hooks
- Bootstrap para el diseño
- SweetAlert2 para alertas

**Servidor:**

- Node.js
- Express como framework para el servidor
- MySQL como base de datos
- CORS

## Funcionalidades

- Registro de nuevos empleados
- Visualización de la lista de empleados
- Actualización de la información de empleados
- Eliminación de empleados