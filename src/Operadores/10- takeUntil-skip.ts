/**Video #50 & 51: Operador takeUntil.& Operador skip*/
import { Observable, Observer, interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};

const boton = document.createElement('button');
boton.innerText = 'Detener Timer';
document.querySelector('body').append(boton);

// ejemplo del Operador TakeUntil
const counter$: Observable<number> = interval(1000);
/**
 //Ejemplo con operador TakeUntil  
 *const clikBtn$: Observable<Event> = fromEvent<Event>(boton, 'click');
 */
// Ejemplo con operador Takeuntil y skip
const clikBtn$: Observable<Event> = fromEvent<Event>(boton, 'click')
.pipe(
  tap(()=> console.log('tap antes del skip')),
  skip(1),
  tap(()=> console.log('tap despues del skip'))
);
counter$.pipe(takeUntil(clikBtn$)).subscribe(observer);


// Operador Skip
// counter$.pipe(
//   skip(3)
// ).subscribe(observer)

/**
 * para mas informacion sobre este operador consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
