# Pizzería Mamma Mia! (Hito 8)

Pizzería Mamma Mia! es una aplicación web desarrollada con React, React Router y Bootstrap que permite a los usuarios visualizar y agregar pizzas a su carrito de compras, además de autenticarse con un sistema real basado en JWT.

## Características

- Interfaz moderna y responsive.
- Lista de pizzas con descripciones e ingredientes.
- Botones para ver más detalles y añadir al carrito.
- Navbar con opciones de navegación, inicio de sesión y visualización del total del carrito.
- Componente Register que contiene un formulario con los campos Email, Contraseña y Confirmar contraseña. Utiliza JWT para registrar al usuario en el backend.
- Componente Login que contiene un formulario con los campos Email y Contraseña. Utiliza JWT para autenticar al usuario en el backend.
- Autenticación real con backend utilizando JWT.
- Envío de carrito de compras al backend como simulación de compra.
- Navegación mediante React Router con rutas protegidas para usuarios autenticados.
- Componente NotFound para manejar rutas inexistentes con un enlace de redirección a la página principal.
- Componente Profile que muestra el email del usuario autenticado y un botón para cerrar sesión.
- Contextos para manejar el estado del carrito, los datos de las pizzas y la sesión del usuario.
- **Update!** Componente `Pizza` que muestra la información detallada de una pizza específica.
- **Update!** Componente `Cart` que muestra el contenido del carrito de compras, permite modificar las cantidades de pizzas y enviar el carrito al backend.
- **Update!** Componente `Navbar` actualizado para mostrar el total del carrito y opciones de autenticación dependiendo del estado del usuario.


## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario.
- **React Router**: Para la gestión de rutas y navegación.
- **React Context**: Para la gestión global del estado de la aplicación.
- **Bootstrap**: Para el diseño y la responsividad.
- **Firebase Storage**: Para alojar las imágenes de las pizzas.
- **JWT**: Para autenticar usuarios con el backend.

## Instalación y Configuración

### 1. Clonar el repositorio y acceder al directorio del proyecto

```bash
git clone https://github.com/a-cidm/pizzeria.git
cd pizzeria
```

### 2. Instalar dependencias del frontend

```bash
npm install
```

### 3. Abrir dos terminales separadas

- **Terminal 1**: Para ejecutar el backend
- **Terminal 2**: Para ejecutar el frontend

### 4. Iniciar el backend (Terminal 1)

```bash
cd backend
npm install
npm run dev
```

El backend estará disponible en `http://localhost:5000`.

### 5. Iniciar el frontend (Terminal 2)

Desde la raíz del proyecto:

```bash
npm run dev
```

El frontend se ejecutará en `http://localhost:5173`.

### ⚠ Notas importantes

- Ambos servidores deben estar corriendo simultáneamente.
- Si hay conflicto de puertos, modifica `.env` o los archivos de configuración.
- El token JWT se almacena temporalmente en memoria (no persiste al recargar la página).

## Estructura del Proyecto

```
📂pizzeria
┣ 📂public
┣ 📂src
┃ ┣ 📂assets
┃ ┣ 📂components
┃ ┣ 📂pages
┃ ┣ 📂data
┃ ┣ 📂context
┃ ┃ ┣ 📜CartContext.jsx
┃ ┃ ┣ 📜PizzaContext.jsx
┃ ┃ ┣ 📜UserContext.jsx
┃ ┣ 📜App.jsx
┃ ┣ 📜main.jsx
┣ 📂backend
┣ 📜README.md
┣ 📜package.json
```

## Rutas Implementadas

- `/` → Página de inicio.
- `/register` → Registro de usuarios.
- `/login` → Inicio de sesión.
- `/cart` → Carrito de compras (requiere login).
- `/pizza/:id` → Detalles de pizza.
- `/profile` → Perfil del usuario autenticado.
- `*` → Página 404 (NotFound).

## Componentes Principales

### `App.jsx` **Update!**

Componente principal que integra la barra de navegación y define las rutas de la aplicación. Ahora envuelve la app con `CartProvider`, `PizzaProvider` y `UserProvider`.

### `Navbar.jsx` **Update!**

Barra superior con navegación. Ahora detecta el estado del usuario y muestra las opciones correspondientes (`Login`, `Register`, `Profile`, `Logout`). También muestra el total del carrito.

### `Login.jsx` y `Register.jsx` **Update!**

Ambos componentes ahora se comunican con el backend para autenticar o registrar usuarios. Muestran alertas de éxito o error según corresponda.

### `Profile.jsx` **Update!**

Obtiene el email del usuario desde `/api/auth/me` y muestra un botón para cerrar sesión.

### `Cart.jsx` **Update!**

Muestra el carrito visualmente, permite modificar cantidades y enviar el carrito al backend usando `/api/checkouts`. Muestra mensaje de éxito tras realizar la compra.

### `Pizza.jsx` **Update!**

Muestra la información detallada de una pizza individual. Permite agregarla al carrito.

### `NotFound.jsx`

Página de error 404 con enlace para volver al home.

## Contextos

### `CartContext.jsx`

Maneja el estado del carrito y proporciona funciones para agregar, aumentar o disminuir productos.

### `PizzaContext.jsx`

Maneja los datos de las pizzas y facilita su acceso desde cualquier componente.

### `UserContext.jsx` **Update!**

Maneja autenticación: login, registro, cierre de sesión y obtención del perfil del usuario. Utiliza JWT.

## Contribución

Este proyecto es parte de un estudio académico y, por lo tanto, actualmente no acepta contribuciones externas.

## Autor

**Alberto Cid Montero** — [GitHub](https://github.com/a-cidm/pizzeria)

## Licencia

MIT

## Versión 8

Este proyecto es presentado para el Hito 8.
