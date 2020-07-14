/**Video #59: throttleTime*/
import { Observer, fromEvent, Observable, asyncScheduler } from 'rxjs';
import { throttleTime, debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};



const click$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
// Ejemplo numero 1 
click$.pipe(
  // debounceTime(3000)
  throttleTime(3000)
)//.subscribe(observer);

// Ejemplo numero 2 

const  input = document.createElement('input');
document.querySelector('body').append(input);

const  input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
  throttleTime(3000, asyncScheduler, { leading: true, trailing: true} ),
  // map( val => val.target[`value`]),
  pluck('target','value'),
  // distinctUntilChanged()
).subscribe(observer);

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
