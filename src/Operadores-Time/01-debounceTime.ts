/**Video #58: operador debounceTime */
import { Observer, fromEvent, Observable, observable } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};

const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
// Ejemplo numero 1 
click$.pipe(
  debounceTime(3000)
  // tap(console.log)
);//.subscribe(observer);

// Ejemplo numero 2 

const  input = document.createElement('input');
document.querySelector('body').append(input);

const  input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
  debounceTime(1000),
  // map( val => val.target[`value`]),
  pluck('target','value'),
  distinctUntilChanged()
).subscribe(observer);
/**
 * para mas informacion sobre este operador/ Operadores consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
