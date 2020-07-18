/**Video #81: switchMap vs mergeMap */
import { fromEvent, interval, Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$: Observable<MouseEvent>=fromEvent<MouseEvent>(document, 'click');
const interval$: Observable<number>=interval(1000);


click$.pipe(
  switchMap(() => interval$)
  // mergeMap(() => interval$)
).subscribe(console.log);

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
