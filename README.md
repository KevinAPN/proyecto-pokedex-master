# Pokédex - Aplicación React con GraphQL

Esta es una aplicación de Pokédex desarrollada en React utilizando Vite y TypeScript. La aplicación consume datos de la PokéAPI mediante GraphQL (usando Apollo Client) y utiliza Bootstrap para los estilos. Además, cuenta con navegación mediante React Router, modo oscuro/claro y funcionalidades de búsqueda y filtrado.

## Características

- **Pantalla principal (Home):** Página de bienvenida con un enlace a la Pokédex.
- **Listado de Pokémon (Pokédex):** Muestra una lista paginada de Pokémon con búsqueda y filtros por nombre, tipo, peso y altura.
- **Detalles de Pokémon:** Al seleccionar un Pokémon, se muestran sus detalles, incluyendo:
  - Nombre, imagen, altura y peso (con conversión de unidades).
  - Tipos, habilidades y estadísticas de combate.
- **Modo Oscuro/Claro:** Permite alternar entre temas en tiempo real.
- **Responsive:** Interfaz adaptada a dispositivos móviles.

## Instalación

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias:

```bash
npm install
```

Las dependencias principales son:

- **React** y **React DOM**
- **Vite** (para desarrollo y compilación)
- **TypeScript** (para tipado estricto)
- **Bootstrap** (para estilos y responsividad)
- **React Router DOM** (para navegación)
- **@apollo/client** y **graphql** (para consumir la API GraphQL de PokéAPI)

*Nota:* La versión actual de React y React DOM en el proyecto deben ser compatibles. Además, para React Router DOM no es necesario instalar `@types/react-router-dom` si la versión instalada ya lo incluye.

## Uso

### Ejecutar en Modo Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador para ver la aplicación.

### Compilar para Producción y Previsualizar

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

La estructura actual del proyecto es la siguiente:

```
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── components/
    ├── pages/
    ├── hooks/
    ├── assets/
    ├── utils/
    ├── routes/
```

## Autor

Desarrollado por [KevinAPN MS-Ospina y utadluis].


Contribución
Si deseas contribuir, por favor clona el repositorio, crea una rama nueva y realiza tus cambios. Luego, envía un Pull Request con una descripción de tus modificaciones.

Licencia
Este proyecto se distribuye bajo la licencia MIT.
