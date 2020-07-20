/**Video #95: forjoin-lab */
import { Observable, of, Observer, interval, forkJoin } from "rxjs";
import { take, delay, catchError } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL: string = 'https://api.github.com/users/';
const GITHUB_USER: string = 'DanielWilches';

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}${GITHUB_USER}`).pipe(catchError(err=> of(err))),
  repos: ajax.getJSON(`${GITHUB_API_URL}${GITHUB_USER}/repos111`).pipe(catchError(err=> of(err))),
  gists: ajax.getJSON(`${GITHUB_API_URL}${GITHUB_USER}/gists`).pipe(catchError(err=> of(err))),

}).pipe(catchError(err=> of(err))).subscribe(console.log);

/**
 * para mas informacion sobre este operador/es consulte 'APUNTES DEL CURSO RxJs'
 * que esta alojado dentro de este repositorio.
 */
