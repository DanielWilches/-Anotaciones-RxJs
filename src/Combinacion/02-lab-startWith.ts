/**Video #88: Operador starwith */

import { startWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
// referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';
const body = document.querySelector('body');
const url: string = 'https://reqres.in/api/users/2?delay=3';
// streams

ajax.getJSON(url)
  .pipe(
    startWith(true)
  )
  .subscribe(resp => {
    if (resp === true){
      body.append(loadingDiv);
    }else{
      document.querySelector('.loading').remove();
    }
    console.log(resp);
  })

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
