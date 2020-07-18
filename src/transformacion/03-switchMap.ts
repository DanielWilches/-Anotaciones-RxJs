/**Video #80: switchMap*/

import { fromEvent, Observable } from 'rxjs';
import { pluck, debounceTime, map, mergeAll, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Users } from '../interfaces/usersGithud';
import { resul } from '../interfaces/resul';


/**Video #75, #76 & #77  : Introduccíon al problema y necesidad de opeeradores de transformacion*/
//  api

const urlApi: string = 'https://api.github.com/search/users?q=';
// referencias 
const body = document.querySelector('body');
const textInPut = document.createElement('input');
const ordenList = document.createElement('ol');
body.append(textInPut, ordenList)

// Helpers 

const mostrarUsuarios = ( usuarios: Users[] )=>{
  // console.log(usuarios);
  ordenList.innerHTML ='';
  for ( const usuario of usuarios ){
    const  li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;
    const anchor = document.createElement('a'); 
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login +' ');
    li.append(anchor);
    ordenList.append(li);
  } 
};


// streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(textInPut, 'keyup');

mergeAll
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<resul>>(texto => ajax.getJSON(`${urlApi}${texto}`)),
  // tap(console.log),
  mergeAll<resul>(),
  pluck<resul,Users[]>('items'),
).subscribe(mostrarUsuarios);



// Ejemplo de switchMap
const url= 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck('target','value'),
  switchMap(texto => ajax.getJSON(`${url}${texto}`).pipe(
    tap(console.log),
  )),
).subscribe(console.log);





/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
