/**Video #70: Diferencia entre getJson ajax*/
import { Observable, of, Observer} from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer: Observer<string | object> = {
  next: next => console.log('next: ',next ),
  error: error => console.warn('error: ',error ), 
  complete: () => console.log('complete')
};


// const url = 'https://httpbin.org/delay/1';
// url Error 
const url = 'https://httpbin.org/delawwy/1';
// const url = `https://api.github.com/users?per_page=5`;
const ManejoError = (resp: AjaxError) => {
  console.warn('error: ', resp.message);
  return of({
    ok: false,
    usuarios: []
  });
}

// Primera forma de manejar el error
/** 
const obs$: Observable<any> = ajax.getJSON(url).pipe(catchError(ManejoError));
const obs2$: Observable<any> = ajax(url).pipe(catchError(ManejoError));

obs$.subscribe(data => console.log('getJson: ', data));
obs2$.subscribe(data => console.log('ajax: ', data));
*/
const obs$: Observable<any> = ajax.getJSON(url);
const obs2$: Observable<any> = ajax(url);

obs$.pipe(catchError(ManejoError)).subscribe(observer);
obs2$.pipe(catchError(ManejoError)).subscribe(observer);



/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
