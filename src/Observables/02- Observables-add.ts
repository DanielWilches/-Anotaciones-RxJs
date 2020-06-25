// sección #3: v16 y v17 subscription y unsubscribe, terminar observables en cadena.
import { Observable, Observer, Subscriber, Subscription, TimeoutError } from 'rxjs/';
const observer: Observer<any> = {
  next: value => console.log(`next: ${value}`),
  error: error => console.error(`error: ${error}`),
  complete: () => console.info('completado'),
}
const intervalo$ = new Observable<number>(Subscriber => {
  //Crear un contador 1, 2, 3, 4...
  let num: number = 0;
  const interval = setInterval(() => {
    num++
    Subscriber.next(num)
  }, 1000);
  // la funcion de arriba se ejecuta cada intervalo de tiempo que nosotros le digamos
  setTimeout(() => {
    Subscriber.complete();
    console.log('observable completado');
  }, 6500);
  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
  };
});

const subs: Subscription = intervalo$.subscribe(observer);
const subs1: Subscription = intervalo$.subscribe(num => console.log(`Num:  ${num}`));
const subs2: Subscription = intervalo$.subscribe(num => console.log(`Num:  ${num}`));
subs.add(subs1)
    .add(subs2);
// con este metodo podemos encadenar suscripciones a la suscripcion padre

setTimeout(() => {
  subs.unsubscribe();
  // subs1.unsubscribe();
  // subs2.unsubscribe();
  console.log('la suscripcíon se cancelo');
}, 8000);

