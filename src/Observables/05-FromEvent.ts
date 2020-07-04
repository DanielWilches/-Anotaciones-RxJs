import { fromEvent } from 'rxjs'

const observer = {
  next : ( value: any )=> console.log('next', value)
}
/* Eventos del dom */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup'); 

// un ejemplo de la destructuracion del ecmaScript 6
src1$.subscribe(({x , y}) =>{
  console.log(x , y );
});

src2$.subscribe(evento => {
  console.log(evento);
});







