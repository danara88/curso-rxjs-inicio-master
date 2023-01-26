import { of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

/**
 * take(2): Significa que estamos limitando la cantidad de emisiones del observable a solo
 * 2 emisiones. Una vez llegando a la segunda emisión, se hace el complete.
 *
 * Usando el take, una vez llegando a la cantidad de emisiones especificada, cancela la
 * ejecución del observable.
 */
numeros$.pipe(take(2)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});
