// V # 34: operador map, V# 35: operador pluck, v#36Operador: mapTo
import { Observable, range, fromEvent  } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';
// Operador map Ej1
// const Range$: Observable<number> = range(1, 9);
// Range$.pipe(
//   map<number, string>(val => String(val * 10)))
//   .subscribe(resul => {
//     console.log(resul);
//   });

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
// operador map Ej2
const keyUpCodeMap$: Observable<string> = keyUp$.pipe(map(event => event.code));
keyUpCodeMap$.subscribe(resul => {console.log('map',resul)});
// Operador pluck
const KeyUpCodePluck$: Observable<string> = keyUp$.pipe(pluck('target', 'baseURI'));
KeyUpCodePluck$.subscribe(resul => {console.log('pluck',resul)});
//Operador MapTo
const KeyUpCodeMapTo$: Observable<string>  = keyUp$
  .pipe(mapTo('Tecla presionada'));
  KeyUpCodeMapTo$.subscribe(resul => {console.log('mapTo',resul)});

