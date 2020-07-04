import { of } from 'rxjs'
let numA: number[] = [1, 2, 3, 4, 5, 6];
/*
  Nota: cada argumento debe ir separado por una coma en caso que nuestro argumento sea un arreglo podemos usar el operador spread lo que nos va a desintegran nuestro arreglo.
*/
const EjemploOf$ = of<number>(...numA);
// const EjemploOf$ = of<any>([1, 2], {a:1, b:2}, function(){}, Promise.resolve(true));
console.log('incio del observer');
EjemploOf$.subscribe((next) => {
  console.log(`next: ${next}`);
}, err => {
  console.log(err)
}, () => console.log('terminamos la secuencia'));
console.log('fin del observer');
/*
En resumen, el OF emite un observable por cada argumento que se le ingrese.
pero recomendable tener un tipado estricto de datos
*/
