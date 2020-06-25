// sección #3: observables.
import { Observable, Observer } from 'rxjs/';
const observer: Observer<any> = {
  next: value =>console.log(`next:[next] ${value}`),
  error:  error => console.warn(`error:[error] ${error}`),
  complete: () => console.info('completado [obs]'),
}
// este es uno de los tantos metodos que exite para crear un observable
// const ejemploObs$ = Observable.create();
const ejemploObs$ = new Observable<string>( subs => {
  subs.next('hola');
  subs.next('mundo');

  // Forzar un error
  // const A = undefined;
  // A.nombre= 'daniel prieto';

  subs.next('hola');
  subs.next('mundo');

  subs.complete();
});
ejemploObs$.subscribe(observer);

// ejemploObs$.subscribe(
//   valor => console.log(`next: ${valor}`),
//   error => console.warn(`error: ${error}`),
//   () => console.info('completado')
// );




