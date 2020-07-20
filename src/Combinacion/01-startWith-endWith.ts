/**Video #88: Operador starwith */
import { of , Observer,Observable, interval  } from 'rxjs';
import { startWith, take, endWith } from 'rxjs/operators';


const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('completado'),
}

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
