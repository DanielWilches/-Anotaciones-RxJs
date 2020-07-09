/*V#39: operador tap */
import { range, Observable, Observer } from 'rxjs';
import { tap, map } from 'rxjs/operators';



const numero$: Observable<number> = range(1, 5);
numero$.pipe(
  tap<number>(X => console.log('antes ', X)),
  map<number, string>(val => (val * 10).toString()),
  tap<string>({
    next: valor => console.log('despues ', valor),
    complete: () => console.log('El tap termino')
  })
).subscribe(val => console.log('subs ', Number(val)));

// el return no tiene valides en el operador tap