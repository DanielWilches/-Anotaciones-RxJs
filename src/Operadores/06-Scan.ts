/**
 * video# 43: operador Scan
 */
import { Observable, from, observable } from 'rxjs';
import { scan, reduce, map } from 'rxjs/operators';

const numeros: number[] = [1, 2, 3, 4, 5];
const accionAcumuladora = (acc: number, cur: number): number => acc + cur;

const emitreNumbers$: Observable<number> = from(numeros);
//  Reduce
emitreNumbers$.pipe<number>(
  reduce<number, number>(accionAcumuladora, 0)
).subscribe(console.log);

// scan
emitreNumbers$.pipe<number>(
  scan<number, number>(accionAcumuladora, 0)
).subscribe(console.log);

// scan como base del patron Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number
}

const user: Usuario[] = [
  { id: 'daniel', autenticado: false, token: null },
  { id: 'oscar', autenticado: false, token: null },
  { id: 'juan', autenticado: true, token: 'ABC' }
];


const state$: Observable<Usuario> = from<Usuario[]>(user).pipe(
  scan<Usuario>((acc, cur) => {
    return { ...acc, ...cur }
  }, { edad: Math.random() }));
  /**
   * parece que el ejemplo escrito arriba 
   * sumo a cada objeto del arrglo de  la edad.
   * el resultado de este sera alojado el state.
   */


const id$: Observable<any> = state$.pipe(
  map(state =>  state)
);
id$.subscribe(console.log);