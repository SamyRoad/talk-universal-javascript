# Codemotion 2016 - Universal JavaScript

**JavaScript** es un lenguaje pensado para funcionar en los **navegadores**, pero con la llegada de Node.js se ha convertido en un lenguaje utilizado también en los servidores. 

Las aplicaciones **"Universal JavaScript"** funcionan tanto en **servidor** como en **cliente**. El código utilizado para implementar el servidor es el mismo que el interpretado por el navegador.

De esta manera, se utiliza el **mismo código fuente** entre **cliente** y **servidor** y tenemos muchas ventajas en SEO. 

Puntos a tener en cuenta:

* Utilizar un sistema de rutas común.
* Implementar la aplicación para que funcione en ambos mundos.
* Compartir el estado entre el cliente y servidor.
* Qué tipo de librerías utilizar.

Esta **presentación** se realizará en dos partes:

1. Explicación del concepto de aplicación universal en JavaScript
2. Implementación de una pequeña aplicación universal utilizando el framework express y las librerías React y Redux.

Los **requisitos** y la **instalación** de la aplicación para el taller se puede encontrar en la url
https://github.com/SamyRoad/talk-universal-javascript.git

## Requisitos

* [Docker](https://www.docker.com/products/docker) para tu distribución
* [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación

La instalación **recomendada** es usando **docker**:

```
git clone https://github.com/SamyRoad/talk-universal-javascript.git
cd talk-universal-javascript
docker-compose build
```

Una vez generada la imagen de docker, para arrancar la aplicación:

```
docker-compose up
```

### Alternativa 1 (**recomendada para CodeMotion Madrid 2016**)

1- Configurar docker de la siguiente manera:

```
DOCKER_OPTS="--registry-mirror http://10.60.32.11:8082 --insecure-registry http://10.60.32.11:8082"
```

Esto se configura de distinta manera dependiendo de la distribución que estes usando:

* [Documentación oficial](https://docs.docker.com/engine/admin/) 
* [Mac OSX](http://stackoverflow.com/questions/32808215/where-to-set-the-insecure-registry-flag-on-mac-os)

2- Cargar la imagen de docker

```
docker pull javiacei/universal-javascript
docker tag <IMAGE ID> talkuniversaljavascript_codemotion
```

NOTA: <IMAGE ID> es el id de la imagen cargada. Para verlo ejecutar el comando `docker images`.

3- Descargar el proyecto desde `github`

```
git clone https://github.com/SamyRoad/talk-universal-javascript.git
```

4-  Para ejecutar la aplicación (desde dentro del proyecto)

```
docker-compose up
```

### Alternativa 2

1- Descargar el contenido de https://drive.google.com/open?id=0B9nhRopEuxcbTl84WHVkdTV1WXM

2- Cargar la imagen de docker

```
docker load -i docker-image
```

3- Descomprimir `talk-universal-javascript.zip`

4- Acceder a la carpeta donde se ha descomprimido el `zip` y ejecutar `docker-compose up` para ejecutar la aplicación.

## Uso

El navegador **recomendado** es **Google Chrome**.

```
open http://localhost:3000
```
