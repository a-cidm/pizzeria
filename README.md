# Pizzería Mamma Mia! (Hito 5)

Pizzería Mamma Mia! es una aplicación web desarrollada con React, React Router y Bootstrap que permite a los usuarios visualizar y agregar pizzas a su carrito de compras.

## Características

-   Interfaz moderna y responsive.
-   Lista de pizzas con descripciones e ingredientes.
-   Botones para ver más detalles y añadir al carrito.
-   Navbar con opciones de navegación, inicio de sesión y visualización del total del carrito.
-   Componente Register que contiene un formulario con los campos Email, Contraseña y Confirmar contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   Componente Login que contiene un formulario con los campos Email y Contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   Navegación mediante React Router con rutas organizadas.
-   **New!** Implementación de rutas para los componentes principales.
-   **New!** Componente NotFound para manejar rutas inexistentes con un enlace de redirección a la página principal.
-   **New!** Componente Profile que muestra el email de un usuario y un botón para cerrar sesión.

## Tecnologías Utilizadas

-   **React**: Para la construcción de la interfaz de usuario.
-   **React Router**: Para la gestión de rutas y navegación.
-   **Bootstrap**: Para el diseño y la responsividad.
-   **Firebase Storage**: Para alojar las imágenes de las pizzas.

## Instalación y Uso

1.  Clonar el repositorio:

    ```sh
    git clone https://github.com/a-cidm/pizzeria.git
    cd pizzeria
    ```

2.  Instalar dependencias:

    ```sh
    npm install
    ```

3.  Instalar Backend e iniciar:

    ```sh
    cd src/backend
    npm install
    npm run dev
    ```

4.  Volver al Frontend e iniciar:

    ```sh
    cd ../..
    npm run dev
    ```

## Estructura del Proyecto

```
┣ 📂public
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📜Header.jpg
┃ ┃ ┗ 📜react.svg
┃ ┣ 📂backend **New**
┃ ┣ 📂components
┃ ┃ ┣ 📜CardPizza.jsx
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┣ 📜Navbar.jsx **New**
┃ ┣ 📂pages **New**
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┣ 📜Register.jsx
┃ ┃ ┣ 📜Login.jsx
┃ ┃ ┣ 📜Cart.jsx
┃ ┃ ┣ 📜Pizza.jsx
┃ ┃ ┣ 📜Profile.jsx **New**
┃ ┃ ┣ 📜NotFound.jsx **New**
┃ ┣ 📂data
┃ ┃ ┣ 📜pizzas.js
┃ ┣ 📜App.jsx
┃ ┣ 📜index.css
┃ ┣ 📜main.jsx
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package.json
┣ 📜README.md
┗ 📜vite.config.js
```

## Rutas Implementadas

-   `/` -> Muestra el componente Home.
-   `/register` -> Muestra el componente Register.
-   `/login` -> Muestra el componente Login.
-   `/cart` -> Muestra el componente Cart.
-   `/pizza/p001` -> Muestra el componente Pizza.
-   `/profile` -> Muestra el componente Profile.
-   `/404` -> Muestra el componente NotFound.

## Componentes Principales

### `App.jsx`

Componente principal que integra la barra de navegación y define las rutas de la aplicación.

<<<<<<< HEAD
### `Navbar.jsx` **Update!**
=======
### `Navbar.jsx` **New!**
>>>>>>> c3973931884ae07d5ca50f9bad12a5c8bbd2ef6c

Muestra el nombre de la pizzería, botones de navegación y el total del carrito. Los botones de navegación redirigen a las rutas establecidas.

### `Home.jsx`

Contiene el encabezado y la lista de pizzas disponibles.

### `CardPizza.jsx`

Componente reutilizable para mostrar la información de cada pizza.
**New! iterando por los ingredientes para renderizarlos en una lista**

### `Footer.jsx`

Pie de página con información de derechos reservados.

### `Header.jsx`

Encabezado principal con el nombre y lema de la pizzería.

### `RegisterPage.jsx`

Componente que contiene un formulario con los campos Email, Contraseña y Confirmar contraseña.

### `LoginPage.jsx`

Componente que contiene un formulario con los campos Email y Contraseña.

### `Cart.jsx`

Muestra la información de cada pizza en el carrito, permite aumentar y disminuir la cantidad de pizzas y calcula el total de la compra.

###  `Pizza.jsx`

Muestra la información de una pizza específica, incluyendo nombre, precio, ingredientes, imagen y descripción.

###  `Profile.jsx` **New!**

Muestra el email de un usuario y un botón estático para cerrar sesión (su funcionalidad será implementada en futuros hitos).

### `NotFound.jsx` **New!**

Componente que se muestra cuando la ruta no existe, con un enlace que redirige a la página principal.

## Contribución

Este proyecto es parte de un estudio académico y, por lo tanto, actualmente no acepta contribuciones externas.

## Autor

**Alberto Cid Montero** - [GitHub](https://github.com/a-cidm)

## Licencia

Este proyecto está bajo la licencia MIT.

## Versión 5

Este proyecto es presentado para el Hito 5.
