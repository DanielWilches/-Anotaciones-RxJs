/**Video #53: Operador distinctUntilChanged*/
import { Observable, Observer, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

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
// ejemplo del operador distinctUntilChanged
from<Personaje[]>(personajes).pipe(
  distinctUntilChanged((ant: Personaje, act: Personaje) => {
    return ant.nombre === act.nombre;
  })).subscribe(observer)

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
