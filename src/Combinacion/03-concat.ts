/**Video #91: Funcion concat */
import { interval, Observable, concat } from 'rxjs';
import { take } from 'rxjs/operators'


const  interval$: Observable<number> = interval(1000);

concat( interval$.pipe(take(4)), interval$.pipe(take(6)),[100, 200, 300])
.subscribe(console.log);





/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
