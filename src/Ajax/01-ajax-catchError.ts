// importacion para realizar peticiones ajax a una restApi
import { of, Observable } from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from "rxjs/ajax";
import { map, pluck, catchError, } from 'rxjs/operators';


/**Video #66-#67-#68: Conceptos generales de una petición ajax usando Fetch*/

// const url = `https://api.github.com/usersxxx?per_page=5`;
const url = `https://api.github.com/users?per_page=5`;
const fetchpromesa: Promise<Response> = fetch(url);
// fecth sin manejo de errores.
/**
  fetchpromesa
  .then(resp => resp.json())
  .then(data =>console.log('data', data))
  .catch(console.warn);
 */

/** video #67: manejo de errores con fetch */
const manejoErrores = (Response: Response) => {
  if (!Response.ok) {
    throw new Error(Response.statusText);
  }
  return Response;
}
// fetch con manejo de errores
/** 
fetchpromesa
  .then(manejoErrores)
  .then(resp => resp.json())
  .then(data => console.log('data', data))
  .catch(err => console.warn('error en usuarios', err));
*/

/** video #68: Petición usando ajax de RxJs*/
// funcion que devuelve observable con el error
const atrapaError= ( err: AjaxError )=>{
  console.warn('err en: ', err );
  return of([]);
}; 


ajax(url).pipe(
  // map(resp => resp.response),
  pluck('response'),
  catchError(atrapaError)
).subscribe( users =>  console.log('usuarios: ', users ) );

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
