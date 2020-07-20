/**Video #93: Funcion combineLatest */
import { fromEvent, Observable, merge, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';
input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


// helper 
const getInputStream = (element: HTMLElement) => {
  return fromEvent<KeyboardEvent>(element, 'keyup').pipe(
    pluck<KeyboardEvent, string>('target', 'value')
  );
};

combineLatest(
  getInputStream(input1),
  getInputStream(input2)
).subscribe(console.log)


/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
