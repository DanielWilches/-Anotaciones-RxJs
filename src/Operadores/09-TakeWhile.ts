/**Video-49: Operador takeWhile.*/
import { Observable, Observer, fromEvent } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
}

const click$:Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
  map<MouseEvent, { x: number , y: number}>(({ x , y})=>({ x, y })),
  takeWhile<{ x: number , y: number}>(({ y })=> y <= 150, true)
  ).
subscribe(observer);


/**
 * para mas informacion sobre este operador consulte APUNTES DEL CURSO RxJs
 * que esta alojado dentro de este repositorio.
 */ 
