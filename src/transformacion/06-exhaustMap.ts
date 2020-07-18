/**Video #83: operador de aplanacion  exhaustMap */
import { Observable, fromEvent, interval,Observer } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
}

const interval$: Observable<number>=interval(500).pipe(take(3));
const click$: Observable<MouseEvent>=fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  exhaustMap(()=> interval$ )
).subscribe(observer);
/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
