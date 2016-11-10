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

## Uso

El navegador **recomendado** es **Google Chrome**.

```
open http://localhost:3000
```
