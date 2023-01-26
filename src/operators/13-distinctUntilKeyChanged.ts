import { distinctUntilKeyChanged, from } from "rxjs";

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
  {
    nombre: "Fernanda",
  },
];

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
