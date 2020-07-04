//  Video-#29: Mas ejemplos con from y of
import { of, from, Observer } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
/*
of = Toma argumentos y genera una secucencia.
from = array, promise , iterable, observable 
 */

const OBSERVER: Observer<any> = {
  next: val => console.log('next: ', val),
  error: err => console.log('error: ', err),
  complete: () => console.log('complete')
};
/**
 * a primera vista el from desintegra el arreglo 
 * enviado como parámetro y emite sus valores. 
 * El of en cambio emite el arreglo con sus 
 * elementos dentro, ósea genera solo una emisión 
 * por el argumento enviado y Form por cada uno 
 * de los elementos genera una emisión.
 */
// const source$  = from([1, 2, 3, 4, 5]);
// const source$  = of([1, 2, 3, 4, 5]);
// const source$ = of(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(resp => {
//   resp.then(async(response)=> {
//     console.log(response);
//     const dataResp = await  response.json();
//     console.log(dataResp);
//   });
// });
/**
 * parece que en el ejemplo anterior manejamos una
 * peticion ajax y la convertimos a JSON. no estoy 
 * seguro pero de igual forma dejo constacia 
 * de la importacia que tiene este ejercicio.
 */

// source$.subscribe(OBSERVER);


// Funciones generadoras o iterables
// con esta funcion tambiem podemos hacer funciones
//  emita un tipo determinado de data
const miGenerador = function *(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};
// identificamos una funcion generadora por el asterisco
const miIterable = miGenerador();
// for (let id of miIterable) {
//   console.log(id);
// }
from ( miIterable ).subscribe(OBSERVER); 
