# Universal javascript - Codemotion Madrid 2016

## Paso 1 - Instalación de las librerías y Docker

Primero, instalamos todas las **librerías** que vamos a utilizar durante todo el taller (`package.json`), y la **configuración**
necesaria para ejecutar la aplicación usando **docker** (`Dockerfile` & `docker-compose`).

## Paso 2 - Webpack para montar el servidor de desarrollo

**Implementación** de un servidor de desarrollo escuchando en el puerto 3001 para servir el código **JavaScript** en modo **"Hot
Module Replacement (HMR)"** gracias a **Webpack**.

```
npm run start:dev-server
```

## Paso 3 - Estilos y imagenes

## Paso 4 - Aplicación React

**Implementación** del **servidor** en `expressjs` que nos servirá un **HTML** con un punto de anclaje y la carga
del **JavaScript** necesario para montar los componentes **React**.

En el momento que el **HTML** sea devuelto por el **servidor**, se ejecutará el JavaScript de `src/client/index`, que monta el
**componente raíz** `Home.jsx`.

```
<Home> (container)
  <App> (component)
    <ItemList> (component)
      <Item /> (component)
    </ItemList>
  </App>
</Home>
```

\* La diferencia que existe entre los `components` y los `containers` se puede encontrar en el post
[Presentational and Container
Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.kg8l6lrgo) de **Dan Abramov**.

Existen dos maneras de **definir componentes** de React:

* Función JavaScript
* Clase ES6

Usando Clase ES6 nos da más **funcionalidades**, que fundamentalmente es la implementación de los métodos del ciclo de vida de
React.

Para escribir los `components` hemos utilizado la definición mediante **función JavaScript**, que solo recibe un conjunto de
propiedades.

En cambio, los `containers` los hemos definido utilizando **clases** de **JavaScript** porque definen **cómo va a
funcionar la aplicación** haciéndonos implementar métodos del ciclo de vida de **React** como por ejemplo `componentDidMount`.

## Paso 5 - Simular API con `json-server`

Para simular el comportamiento de un **API real con datos ficticios**, podemos montarnos nuestro propia aplicación que devuelva
datos ficticios o utilizar librerías de terceros.

Nosotros utilizaremos
[json-server](https://github.com/typicode/json-server) para construirnos un API de datos ficticios de **manera muy
rápida**.

## Paso 6 - Leer los datos del API desde el componente React y guardar en estado

**Leemos los datos** desde el método `componentDidMount` que se ejecuta en el momento que se monte el componente.

Introducimos el resultado en el **estado** del componente y se refrescará (realiza un `re-render` sobre el DOM virtual) 
  mostrando el **listado de elementos**.

## Paso 7 - Funcionalidad "Me gusta / No me gusta"

Para **comprobar** los que los cambios sobre el estado del `container` de React (Home.jsx) **re-renderizan** los componentes de
**React**, implementamos la acción de `like` & `unlike`.
