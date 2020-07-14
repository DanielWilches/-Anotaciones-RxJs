# Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

Sección #5: operadores comunes.

En resumen, la sección tres echamos un vistazo a los operadores mas utilizados en RxJs, todas las notaciones a destacar están dentro de esta sección podrán ser consultadas en el documento de apuntes del curso.
para destacar la última clase tocamos por encima el patrón de diseño redux, en cual básicamente se trata de realizar un monitoreo constante al estado de nuestra aplicación. 

Sección #6: Operadores NO tan comunes.
En esta sección destaca por el control a la data emitida por un observable, poder omitir cierta información que trae el observable de origen de cuerdo a ciertas validaciones o condicionales que se pueden agregar como una función dentro del operador

Sección #7: Operadores que trabajan con el tiempo
En esta sección estudiamos los operadores que trabajan con el tiempo, la mayoría de estos intervalos de tiempo se envía como parámetro del mismo operador, la ventaja de estos operadores es para controlar información que se genera demasiadas veces dentro del observable 



