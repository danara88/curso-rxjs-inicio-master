import { of } from "rxjs";

// Emite valores de manera secuencial y sincrona
const obs$ = of<number[]>(1, 2, 3, 4, 6, 7, 8);

console.log("Inicio del obs");
obs$.subscribe(
  (next) => console.log("next: ", next),
  null,
  () => console.log("Finalziamos la secuencia")
);
console.log("Fin del obs");
