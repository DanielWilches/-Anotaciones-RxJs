/**Video #61: Operador sample*/
import { Observer, Observable, interval, fromEvent } from 'rxjs';
import { sample  } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};

const interval$: Observable<number> = interval(5000);
const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
  sample(click$)
).subscribe(observer);



/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
