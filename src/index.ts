/**Video #52 & 53: Operador takeUntil.& Operador skip*/
import {  Observer } from 'rxjs';
import {  } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};


/**
 * para mas informacion sobre este operador/ Operadores consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
