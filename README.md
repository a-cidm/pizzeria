# Pizzería Mamma Mia! (Hito 6)

Pizzería Mamma Mia! es una aplicación web desarrollada con React, React Router y Bootstrap que permite a los usuarios visualizar y agregar pizzas a su carrito de compras.

## Características

-   Interfaz moderna y responsive.
-   Lista de pizzas con descripciones e ingredientes.
-   Botones para ver más detalles y añadir al carrito.
-   Navbar con opciones de navegación, inicio de sesión y visualización del total del carrito.
-   Componente Register que contiene un formulario con los campos Email, Contraseña y Confirmar contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   Componente Login que contiene un formulario con los campos Email y Contraseña. Además, existe un botón que al enviar el formulario muestra un mensaje de éxito.
-   Navegación mediante React Router con rutas organizadas.
-   Implementación de rutas para los componentes principales.
-   Componente NotFound para manejar rutas inexistentes con un enlace de redirección a la página principal.
-   Componente Profile que muestra el email de un usuario y un botón para cerrar sesión.
-   **New!** Contextos para manejar el estado del carrito y los datos de las pizzas.

## Tecnologías Utilizadas

-   **React**: Para la construcción de la interfaz de usuario.
-   **React Router**: Para la gestión de rutas y navegación.
-   **React Context**: Para la gestión global del estado de la aplicación.
-   **Bootstrap**: Para el diseño y la responsividad.
-   **Firebase Storage**: Para alojar las imágenes de las pizzas.

## Instalación y Configuración

### 1. Clonar el repositorio y acceder al directorio del proyecto

```sh
git clone https://github.com/a-cidm/pizzeria.git
cd pizzeria
```

### 2. Instalar dependencias del frontend

```sh
npm install
```

### 3. Abrir dos terminales separadas

- **Terminal 1**: Para ejecutar el backend  
- **Terminal 2**: Para ejecutar el frontend  

### 4. Iniciar el backend (Terminal 1)

```sh
cd src/backend
npm install
npm run dev
```

El backend estará disponible en `http://localhost:5000` (o el puerto configurado en el entorno).

### 5. Iniciar el frontend (Terminal 2)

Asegúrate de estar en la raíz del proyecto antes de ejecutar el siguiente comando:

```sh
cd pizzeria
npm run dev
```

El frontend se ejecutará en `http://localhost:5173` (o el puerto asignado por Vite).

---

### ⚠ Notas importantes:
- **Ambos servidores deben estar corriendo simultáneamente.**
- **Verifica que no haya conflictos de puertos en caso de estar ejecutando otros servicios.**
- **Si es necesario cambiar el puerto del backend, edita la configuración en `src/backend/config.js` o el archivo de variables de entorno (`.env`).**


## Estructura del Proyecto

```
┣ 📂public
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📜Header.jpg
┃ ┃ ┗ 📜react.svg
┃ ┣ 📂backend
┃ ┣ 📂components
┃ ┃ ┣ 📜CardPizza.jsx
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┣ 📜Navbar.jsx
┃ ┣ 📂pages
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┣ 📜Register.jsx
┃ ┃ ┣ 📜Login.jsx
┃ ┃ ┣ 📜Cart.jsx
┃ ┃ ┣ 📜Pizza.jsx
┃ ┃ ┣ 📜Profile.jsx
┃ ┃ ┣ 📜NotFound.jsx
┃ ┣ 📂data
┃ ┃ ┣ 📜pizzas.js
┃ ┣ 📂context **New**
┃ ┃ ┣ 📜CartContext.jsx **New**
┃ ┃ ┣ 📜PizzaContext.jsx **New**
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

### `App.jsx` **Update!**

Componente principal que integra la barra de navegación y define las rutas de la aplicación.
**Update!** Ahora envuelve la aplicación con `CartProvider` y `PizzaProvider`.

### `Navbar.jsx` **Update!**

Muestra el nombre de la pizzería, botones de navegación y el total del carrito. Los botones de navegación redirigen a las rutas establecidas.
**Update!** Ahora consume `CartContext` y muestra el precio total de los artículos en el carrito.

### `Home.jsx` **Update!**

Contiene el encabezado y la lista de pizzas disponibles.
**Update!** Ahora consume `CartContext` y permite agregar pizzas al carrito desde la página principal.

### `CardPizza.jsx` **Update!**

Componente reutilizable para mostrar la información de cada pizza.
Iterando por los ingredientes para renderizarlos en una lista.
**Update!** Ahora acepta una prop `onAddToCart` y la llama cuando se hace clic en el botón "Añadir".

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
**Update!** Ahora consume `CartContext` y muestra, agrega y elimina artículos del carrito, y muestra el precio total.

###  `Pizza.jsx`

Muestra la información de una pizza específica, incluyendo nombre, precio, ingredientes, imagen y descripción.
**Update!** Ahora consume `CartContext` y permite agregar la pizza mostrada al carrito.

###  `Profile.jsx`

Muestra el email de un usuario y un botón estático para cerrar sesión (su funcionalidad será implementada en futuros hitos).

### `NotFound.jsx`

Componente que se muestra cuando la ruta no existe, con un enlace que redirige a la página principal.

## Contextos

### `CartContext.jsx` **New!**

Maneja el estado del carrito y proporciona funciones para agregar, aumentar y disminuir artículos en el carrito.

### `PizzaContext.jsx` **New!**

Maneja los datos de las pizzas y proporciona funciones para obtener pizzas y detalles de pizzas individuales.

## Contribución

Este proyecto es parte de un estudio académico y, por lo tanto, actualmente no acepta contribuciones externas.

## Autor

**Alberto Cid Montero** - [GitHub](https://github.com/a-cidm)

## Licencia

Este proyecto está bajo la licencia MIT.

## Versión 5

Este proyecto es presentado para el Hito 6.
