import { distinct, from, of } from "rxjs";

const numeros$ = of<number[]>(1, 1, 1, 3, 3, 3, 2, 2, 4, 4, 4);

/**
 * disitinct: Solo deja pasar las emisiones cuyos valores no han sido
 * previamente emitidos. Usa el triple igual === para las comparaciones.
 */
numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Javier",
  },
  {
    nombre: "Leo",
  },
  {
    nombre: "Javier",
  },
  {
    nombre: "Fernanda",
  },
];

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
