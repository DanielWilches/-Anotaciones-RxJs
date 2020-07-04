import { of,range, asapScheduler } from 'rxjs';
const src$ = range(4,7, asapScheduler);
console.log('inico');
src$.subscribe(console.log)
console.log('fin');





