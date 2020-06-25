// sección #3: v18 y v19 subject, Subject-parte2.
import { Observable, Observer, Subject } from 'rxjs';
// cuando las importaciones llegan directamente de
// rxjs lo mas comun es que sean metodos para crear 
// observables o sean tipos de datos.
// pregunta problema 
//  que pasa cuando necesito crear una
// suscripción que genere los mismo datos numéricos

const observer: Observer<any> = {
  next: value => console.log(`next: ${value}`),
  error: error => console.error(`error: ${error}`),
  complete: () => console.info('completado'),
}
const intervalo$ = new Observable<number>(subscriber => {
  const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);
  setTimeout(() => {
    subscriber.complete();
  }, 7000);
  return () => {
    clearInterval(intervalID)
    console.log('Intervalo destruido');
  };
});
// const subs1 = intervalo$.subscribe(rnd => console.log(`subs1: ${rnd}`)); 
// const subs2 = intervalo$.subscribe(rnd => console.log(`subs2: ${rnd}`)); 
// observable tipo subject 
/* características del subject 
  1- casteo  múltiple: se refiere que muchas 
  suscripciones van estar sujetas al observable
  y servirán para distribuir la misma data a
  cada una de ellas 
  2- También es un observer
  3- maneja Next, Error, Complete
*/

const subject$ = new Subject();
const suscripcion = intervalo$.subscribe(subject$);
// característica # 1
// const subs1 = subject$.subscribe(rnd => console.log(`subs1: ${rnd}`));
const subs1 = subject$.subscribe(observer);
// const subs2 = subject$.subscribe(rnd => console.log(`subs2: ${rnd}`));
const subs2 = subject$.subscribe(observer);

// característica # 2 
setTimeout(() => {
  /*
    de esta forma podemos intrudcir data en el flujo
    de datos que el observable esta emitiendo.
  */
  subject$.next(10);
  subject$.complete();
  suscripcion.unsubscribe();
}, 3500);