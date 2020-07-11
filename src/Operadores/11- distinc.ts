/**Video #52 : Operador distinct*/
import { Observable, Observer, of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado'),
};
const numeros$: Observable<number> = of<number>(1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8)
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
// Ejemplo Del Operador distinct
from<Personaje[]>(personajes)
  .pipe(
    distinct<Personaje, string>((p: Personaje) => p.nombre)
  ).subscribe(observer)


/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
