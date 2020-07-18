import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
const url: string = 'https://reqres.in/api/login?delay=1';
/**Video #84: Ejercicio de comparación entre el mergeMap, switchMap y exhaustMap*/
// helper
const peticionHttpLogin = (userPass: any) => ajax.post(url, userPass)
  .pipe(
    pluck('response', 'token'),
    catchError(err =>of('algun error en el proceso') )
  );


// creando Un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';


inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap(event => event.preventDefault()),
    map(ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value
    })),
    // mergeMap(peticionHttpLogin)
    // switchMap(peticionHttpLogin)
    exhaustMap(peticionHttpLogin)
  );

submitForm$.subscribe(console.log);

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
