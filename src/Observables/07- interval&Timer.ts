// seccíon 4 v26 & v27 interval y timer.
import { interval, timer, Observer } from 'rxjs'

const observer: Observer<any> = {
  next: (next) => console.log('next: ', next),
  error: (error) => console.log('error: ', error),
  complete: () => console.log('completado')
};
let hoyEn5: Date = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const interval$ = interval(1000);
const timer$ = timer(hoyEn5);

console.log('inico');
// const subs = interval$.subscribe(observer);
const subsT = timer$.subscribe(observer);
console.log('fin');


setTimeout(() => {
  //  subs.unsubscribe();
  subsT.unsubscribe();
  console.log('termino la suscripcion')
}, 7000);