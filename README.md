# Pizzería Mamma Mia! (Hito 3)

Pizzería Mamma Mia! es una aplicación web desarrollada con React y Bootstrap que permite a los usuarios visualizar y agregar pizzas a su carrito de compras.

## Características

-   Interfaz moderna y responsive.
-   Lista de pizzas con descripciones e ingredientes.
-   Botones para ver más detalles y añadir al carrito.
-   Navbar con opciones de inicio de sesión y visualización del total del carrito.
-   Componente Register que contiene un formulario con los campos Email, Contraseña y Confirmar contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   Componente Login que contiene un formulario con los campos Email y Contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   **New!** Recorre el array de pizzas y renderiza un componente ..
-   **New!** Muestra la información de cada pizza utilizando props y renderiza los ingredientes en una lista.
-   **New!** Muestra la información de cada pizza en el carrito, permite aumentar y disminuir la cantidad y calcula el total de la compra.

## Tecnologías Utilizadas

-   **React**: Para la construcción de la interfaz de usuario.
-   **Bootstrap**: Para el diseño y la responsividad.
-   **Firebase Storage**: Para alojar las imágenes de las pizzas.

## Instalación y Uso

1.  Clonar el repositorio:

    ```
    git clone https://github.com/a-cidm/pizzeria.git
    cd pizzeria
    ```

2.  Instalar dependencias:

    ```
    npm install
    ```

3.  Iniciar la aplicación:

    ```
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
┃ ┣ 📂components
┃ ┃ ┣ 📜CardPizza.jsx
┃ ┃ ┣ 📜RegisterPage.jsx
┃ ┃ ┣ 📜LoginPage.jsx
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┗ 📜Navbar.jsx
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

## Componentes Principales

### `App.jsx`

Componente principal que integra la barra de navegación, el contenido principal y el footer.

### `Navbar.jsx`

Muestra el nombre de la pizzería, botones de navegación y el total del carrito.

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

### **New!** `Cart.jsx`

Muestra la información de cada pizza en el carrito, permite aumentar y disminuir la cantidad de pizzas y calcula el total de la compra.


## Contribución

Este proyecto es parte de un estudio académico y, por lo tanto, actualmente no acepta contribuciones externas.

## Autor

**Alberto Cid Montero** - [GitHub](https://github.com/a-cidm)

## Licencia

Este proyecto está bajo la licencia MIT.

## Versión 3

Este proyecto es presentado para el Hito 3.