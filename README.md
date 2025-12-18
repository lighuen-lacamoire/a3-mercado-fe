# A3 Challenge Web

El proyecto es una web app hecha en [ReactJs](https://react.dev/learn) con [Typescript](https://www.typescriptlang.org/) utilizando [ViteJS](https://es.vite.dev/) como marco de desarrollo y posee distintas funcionalidades que describiremos a continuación:

- [Typescript](https://www.typescriptlang.org/): Agrega una capa de tipado.
- [Axios](https://axios-http.com/es/docs/intro): Utilizada en la invocacion/llamada a servicios http

## Contenido

A continuación describiremos la estructura del proyecto para lo cual partimos de la base de que los componentes y configuración mayormente se encontraron en la carpeta **[src](/src)** como se suele recomendar.

- [src/app](/src/app): Entry point / componentes de inicio de la app
- [src/assets](/src/assets): Recursos propios como la tipografia, imagenes
- [src/components](/src/components): Aqui encontraremos todos los componentes visuales de la app, como ejemplo: Button, Container, Label, etc
- [src/interfaces](/src/interfaces): Tipados para los distintos objetos que vayamos creando, carpeta utilizada en conjunto con Typescript
- [src/pages](/src/pages): Utilizaremos esta carpeta especificamente para los componentes que renderizen paginas para el ruteo, las cuales a su vez podemos agrupar en carpetas por responsabilidad
- [src/routers](/src/routers): Aqui se encuentra especificamente los componentes que actuan como routers para el tipo de navegación de la app, publica o privada
- [src/services](/src/services): En este lugar se encuentra la logica de invocación al backend utilizando axios por medio de llamados http, y el mapeo de los endpoints.
- [src/utils](/src/utils): En esta carpeta pondremos todas las funciones reutilizables tengan o no logica de negocio

y el detalle de los archivos de configuración del proyecto:

- [eslint.config.mjs](/eslint.config.mjs): Se configura todo lo que es sintaxis y demas en conjunto con las reglas de Eslint
- [index.html](/index.html): Archivo inicial del cual parte la app, el html que actua de cascaron del todo
- [package.json](/package.json): Configuración de las dependencias del proyecto, scripts para correr la app
- [prettier.config.mjs](/prettier.config.mjs): Se configura todo lo que es sintaxis y demas en conjunto con las reglas de Prettier
- [tsconfig.app.json](/tsconfig.app.json): Se configura todo lo que es tipado y demas de Typescript
- [vite.config.ts](/vite.config.ts): Configuración del gestor Vite sobre la app

## Requisitos

- [x] [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win64): IDE de desarrollo
- [x] [NodeJS (con npm)](https://nodejs.org/download/release/v20.19.0/node-v20.19.0-x64.msi): Gestor de paquetes
- [x] [ViteJs](https://vite.dev/guide/): Herramienta de construcción
- [x] [Yarn (opcional)](https://classic.yarnpkg.com/latest.msi): Gestor de paquetes

## Instalación

Estos pasos solo aplican en la primera iteración de la aplicación, los pasos iniciales para configurar la app antes de empezar a desarrollar. En caso de ya haberse hecho seguir con el paso **[Desarrollo](#Desarrollo)**

Debemos decargar todas las dependencias del proyecto para lo cual corremos el siguiente comando:

```sh
// usando YARN
yarn install
```

```sh
// usando NPM
npm install --legacy-peer-deps
```

una vez hecho esto podemos verificar que todo salio correctamente, chequeando que se haya creado la carpeta **node_modules** a nivel raiz y en ella varias librerias que utiliza el proyecto.

## Desarrollo

- Para correr la aplicación y empezar a desarrollar debemos correr el siguiente comando

> Note: Tener en cuenta que debemos tener y sino crear un archivo llamado **.env.local** el cual utiliza la app con las **[variables de entorno](#Environments)** por defecto, como referencia se puede tomar el archivo [env.development](/.env.development).

```sh
// usando YARN
yarn run debug
```

```sh
// usando NPM
npm run debug
```

Si todo sale bien deberia abrirse la aplicación como **http://localhost:3004** en nuestro browser predeterminado

- Iniciar utilizando VSCode
  Abrir el vscode en el directorio raiz, y luego en **run and debug** seleccionar la opción **VITEJS Iniciar App <Play> (web)**, darle play, y se abrira automaticamente el servicio con la url **http://localhost:3004**

## Environments

La aplicación utiliza distintas variables de ambiente para su funcionamiento, las cuales pasaremos a detallar.

- [x] **VITE_PORT**: Indica el puerto en el cual levanta la app, por defecto 3004
- [x] **VITE_ROUTER_BASE_URL**: Indica la ruta base, por defecto "/"
- [x] **VITE_BACKEND_API_BASEURL**: Indica la ruta base de la api general, por defecto http://localhost:5261
