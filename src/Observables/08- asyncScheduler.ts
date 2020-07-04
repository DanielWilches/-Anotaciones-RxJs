import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 3000);
// setInterval(() =>{ },3000);
/*
el asyncScheduler realiza el comportamiento del setTImeout y setInterval, además el asyncScheduler produce un Subscriber.
*/

const saludar = ()=> console.log('Hola mundo'); 
const saludar2 = (nombre: string)=> console.log(`hola ${nombre}`);
// trabaja como un setTimeout 
asyncScheduler.schedule(saludar, 2000)
asyncScheduler.schedule(saludar2, 2000, 'daniel')


/*
para trabajar con Scheduler como setInterval el parametro
que recibe no puede ser una funcion de flecha debe ser una
funcion normal y como parametro ricbe el state.  
para que cumpla con la funcion del setInterval debemos
llamar nuestro schedule dentro nuestra funcion y determinar 
cual va ser su nuevo state y el intervalor de tiempo en el
cual sera ejecutado de nuevo.
*/ 
const subsIntervalEj = asyncScheduler.schedule(  function(state){
  console.log('state: ', state);
  this.schedule(state+1,2000);
},1000, 0 );

asyncScheduler.schedule(()=> subsIntervalEj.unsubscribe(), 6000 );



