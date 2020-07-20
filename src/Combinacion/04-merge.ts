/**Video #92: Funcion merge */
import { fromEvent, Observable, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';


const keyUp$: Observable<KeyboardEvent>= fromEvent<KeyboardEvent>(document, 'keyup')
const click$: Observable<MouseEvent>= fromEvent<MouseEvent>(document, 'click')


merge(keyUp$, click$).pipe(pluck('type')).subscribe(console.log)

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
