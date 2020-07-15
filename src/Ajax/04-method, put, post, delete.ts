/**Video #71:Metodos post, put, delete */
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


ajax({
  url,
  method: 'DELETE',
  headers: { 'mi-token': 'ABC123' },
  body: {id: 1, nombre: 'daniel'},
}).subscribe(console.log);


// Nota de la clase

/** 
 * de esta forma podenos hacer peticiones dinamicas 
 * al servidor, simplemente cambiando el comentario el method
*/
/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
