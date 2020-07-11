/**Video #52 & 53: Operador takeUntil.& Operador skip*/
import { Observable, Observer, from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};

interface Personaje {
  nombre: string;
}
const personajes: Personaje[] = [
  { nombre: 'megaman' },
  { nombre: 'robin' },
  { nombre: 'megaman' },
  { nombre: 'megaman' },
  { nombre: 'batman' },
  { nombre: 'super man' },
  { nombre: 'hombre Araña' },
  { nombre: 'hombre Araña' },
  { nombre: 'robin' },
  { nombre: 'dr. willy' },
  { nombre: 'x' }
];

// ejemplo  distinctUntilChanged
from<Personaje[]>(personajes).pipe(
  distinctUntilKeyChanged<Personaje>('nombre'))
  .subscribe(observer)

/**
 * para mas informacion sobre este operador/ Operadores consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
