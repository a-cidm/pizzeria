# Pizzería Mamma Mia!

Pizzería Mamma Mia! es una aplicación web desarrollada con React y Bootstrap que permite a los usuarios visualizar y agregar pizzas a su carrito de compras.

## Características

-   Interfaz moderna y responsive.
-   Lista de pizzas con descripciones e ingredientes.
-   Botones para ver más detalles y añadir al carrito.
-   Navbar con opciones de inicio de sesión y visualización del total del carrito.

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
/
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   |-- Home.jsx
|   |   |-- CardPizza.jsx
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |-- App.jsx
|   |-- index.js
|-- public/
|-- package.json
|-- README.md
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

### `Footer.jsx`

Pie de página con información de derechos reservados.

### `Header.jsx`

Encabezado principal con el nombre y lema de la pizzería.

## Captura de Pantalla

## Contribución

Si deseas contribuir a este proyecto, puedes realizar un fork del repositorio y enviar un pull request con mejoras o nuevas funcionalidades.

## Autor

**Alberto Cid Montero** - [GitHub](https://github.com/a-cidm)

## Licencia

Este proyecto está bajo la licencia MIT.
