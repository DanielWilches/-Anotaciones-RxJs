/**Video #60: Operador sampleTime*/
import { Observer, Observable, fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};


const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
  sampleTime(2000),
  map<MouseEvent, {x: number, y: number}>(( {x,y} )=>({x, y})),
).subscribe(observer);



/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
