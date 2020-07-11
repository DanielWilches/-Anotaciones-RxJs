/**Video-48: Operador first.*/
import { Observable, Observer, fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';
const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
}

const click$:Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');


// const condicionclik = () => { }
click$.pipe(
  tap(() => console.log('tap')),
  first<MouseEvent, MouseEvent>(event => event.clientY >= 150))
  .subscribe(observer);

// ejemplo de Destructuracion de objetos
interface ClientMouse {
  clientX: number;
  clientY: number;
}
click$.pipe(
  map<MouseEvent,ClientMouse>(({ clientX, clientY }) => ({ clientX, clientY })),
  first<ClientMouse>(event => event.clientY >= 150)).subscribe(observer);