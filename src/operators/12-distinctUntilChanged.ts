import { distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of<number[]>(1, 2, 2, 1, 2, 3);

/**
 * disitinctUntilChanged: El observable solo va a emitir valores si el valor
 * anterior es diferente.
 */
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

/**
 * Estos son objetos que estan apuntando a distintos espacios de memoria,
 * por lo que son diferentes.
 */
const personajes: Personaje[] = [
  {
    nombre: "Javier",
  },
  {
    nombre: "Leo",
  },
  {
    nombre: "Leo",
  },
  {
    nombre: "Javier",
  },
  {
    nombre: "Javier",
  },
  {
    nombre: "Fernanda",
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
