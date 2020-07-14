/**Video #62: Operador auditTime*/
import { Observer, Observable, fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
  map<MouseEvent, {x: number, y: number}>(( {x,y} )=>({x, y})),
  tap(val => console.log('tap', val)),
  auditTime(2000),
).subscribe(observer)




/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
