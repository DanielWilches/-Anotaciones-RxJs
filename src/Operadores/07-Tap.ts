/**Video-47: Operador Take.*/
import { Observable, of, Observer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
const observer: Observer<number > = {
  next: value => console.log(`next: ${value}`),
  error: error => console.error(`error: ${error}`),
  complete: () => console.info('completado'),
}
const numeros$ = of(1, 2, 3, 4, 5).pipe(
  tap(t => console.log('tap ', t)));

console.log('inicio operador Take');
numeros$.pipe(take(3)).subscribe(observer);
console.log('fin operador take');
numeros$.subscribe(observer);