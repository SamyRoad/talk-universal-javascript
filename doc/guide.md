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

## Paso 8 - "Me gusta / No me gusta" con Redux

[Redux](http://redux.js.org/) es una librería inspirada en `Flux` que gestiona el estado de una aplicación en
JavaScript y puede ser utilizada **en cualquier entorno** (cliente, servidor y nativo).

Hay que detectar las acciones de nuestra aplicación, es este caso:

* Leer items
* "Me gusta / No me gusta" un ítem

Vamos a empezar a transformar nuestro código a Redux por la funcionalidad de "Me gusta / No me gusta".

### Action redux

Una `action` describe **que un hecho a ocurrido**.

### Reducer redux

Un `reducer` especifica **cómo cambia el estado** de la aplicación cuando se produce una acción.

Cuando se crea un reducer se tiene que tener en cuenta:

* No tiene que mutar el estado
* Devuelve el estado anterior en el caso por defecto

### Store redux

Un `store` guarda el **estado único** de la aplicación y **lanza las acciones**. Une las actions y los reducers.

## Paso 9 - Leer los items usando Redux

Implementación de leer items usando `redux-thunk` para **crear una acción que devuelve una función** que lanza acciones de
**Redux**.

Para poder utilizar `redux-thunk` en **Redux**, es necesario **modificar el store definido en el cliente**, para aplicar el
middleware de `redux-thunk`, además de utilizar el **Provider** de `redux-react`.

## Paso 10 - Server rendering

Queremos que el servidor nos devuelva el **HTML** con los items ya formados y no esperar a
que la petición se resuelva en **cliente**.

Tenemos que renderizar los componentes de **React** en **servidor** gracias a `ReactDOMServer` y el método `renderToString`.

Es **importante** pasar el **estado inicial** al **store** de **Redux** que vamos a utilizar en servidor. Lo creamos y lo
inicializamos con los ítems que hemos leido.

También debemos permitir que la funcion `renderLayout` reciba el **contenido** que tiene que incorporar
en el **body del HTML** que va a devolver.

Vemos cómo el servidor sí que devuelve el **HTML formado**, pero en cuanto se ejecuta
`client/index` para montar los componentes en React, **se elimina el contenido del body** porque el `store` de
`Redux` en `cliente` se está creando `sin el estado inicial del servidor`.

## Paso 11 - Server rendering compartiendo el estado entre servidor y cliente

Para **resolver** el **problema** anterior, tenemos que **compartir el estado** entre cliente y servidor,
así cuando el cliente construya los componentes **React**, lo hará sobre un store creado a partir de los datos que le ha
pasado el servidor en `window.__INITIAL_STATE__`.

## Paso 12 - Refactor de la creacion del store

**Modularizamos** la definición del store en `configureStore` para que sea utilizado tanto por el **servidor** como por el
**cliente**.

## Paso 13 - Uso del dispatch de Redux en servidor

Podemos ver que estamos haciendo lo mismo para leer los ítems en servidor que en cliente:

* En el cliente, realizamos el fetch del API que nos proporciona el navegador.
* En el servidor utilizamos `node-fetch` para realizar el fetch y luego creamos el store con los datos que se ha leido
del API.

Para solventar esta **duplicidad**, cambiamos el servidor para que también utilice el `dispatch` de **Redux** para leer los
items.

Definimos el store `sin estado inicial` y cuando recibimos el *request* `GET /`, hacemos el
`dispatch` sobre el store.

Como este método devuelve un **Promise**, cuando este se halla completado, renderizamos los
componentes de **React** con el estado que contiene el store (el estado ha sido modificado por el dispatch de `fetchItems`).
