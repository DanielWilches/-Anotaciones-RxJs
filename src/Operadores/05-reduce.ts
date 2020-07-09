 // V# 42: Operador reduce.
import { Observable, interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';


const numbers: number[]= [1, 2, 3, 4, 5];
const totalReducer =( acumulador: number, valorActual: number ): number => {
  return acumulador + valorActual;
}
const total = numbers.reduce(totalReducer, 0); 
console.log('total arr', total);

interval(1000).pipe(
  take(5),
  tap(console.log),
  reduce( totalReducer, 2 )).subscribe( {
  next: val => console.log('val: ', val),
  complete: () => console.log('complete')
});

/*el valor seed  se suma con la primera emisión
 *del interval, este que siempre sera cero devuelve
 *el valor inicial del reduce como resultado de  su 
 *suma, que se sumara con la
 *siguiente emisión. */

/**
 * Nota: al momento  de enviar una funcion de cómo 
 * parámetro, sin sus parentecis que indica su ejecución
 * funcionara como una especie de interfaz que se 
 * ejecutara con cada emision del observable o entrada
 * de data.
 * Esto se llama referencia
 */

