// V# 37: operador filter.
import { Observable, range, of, fromEvent, observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
const filterRagen$: Observable<number> = range(1, 10)
  .pipe(
    filter((value, i ) => {
      console.log('index', i);
      return value % 2 === 0
    })
  );
// filterRagen$.subscribe(console.log);
interface Personaje { 
  tipo: string;
  nombre: string
}
const personajes: Personaje[] =[
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'robin'
  },
  {
    tipo: 'villano',
    nombre: 'joker '
  }
]; 
const personajes$: Observable<Personaje> = of<Personaje>(...personajes).pipe<Personaje>(filter<Personaje>(value=> value[`tipo`] === 'heroe' ));
// personajes$.subscribe(console.log);
/*v#38: encadenamiento de operadores */


const keyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup'); 
keyUp$.pipe(
  map<KeyboardEvent, string>(event => event.code),
  filter<string>(code =>  code === 'Enter' )
).subscribe(console.log);
