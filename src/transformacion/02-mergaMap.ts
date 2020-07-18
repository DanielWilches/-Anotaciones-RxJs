/**Video #78: MergeMap
*/
import { of, Observable, Observer, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';
const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
}

const letras$: Observable<string> = of('a', 'b', 'c');

letras$.pipe(
  mergeMap<string, Observable<string>>( (letra) => interval(1000).pipe(
    map<number, string>( i => letra +i ),
    take<string>(3)
  ))
).subscribe(observer);


const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();
mouseDown$.pipe(
  mergeMap(()=> interval$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe(observer);
// mouseUp$.subscribe(observer);



/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
