/**Video #69: get Json*/
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';



const url = 'https://httpbin.org/delay/1';
// const url = `https://api.github.com/users?per_page=5`;

const obs$:Observable<any> = ajax.getJSON(url, { 
    'Contect-Type': 'application/json',
    'mi-token':  'ABCD123'
  });
obs$.subscribe( data => console.log('data: ', data) );


/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
