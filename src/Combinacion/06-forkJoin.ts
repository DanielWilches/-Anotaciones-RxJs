import { Observable, of, Observer, interval, forkJoin } from "rxjs";
import { take, delay } from 'rxjs/operators';

/**Video #94: Funcion forjoin */
  const numeros$: Observable<number>=  of(1, 2, 3,4 ,5); 
  const interval$: Observable<number> = interval(1000).pipe(take(4));
  const letras$:Observable<string> = of('a','b','c','d').pipe(delay(3500));

// esta es la forma que podemos hacer para que la devolucion de la llamada
  forkJoin({
    numeros$,
    interval$,
    letras$
  }).subscribe(console.log);
/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
