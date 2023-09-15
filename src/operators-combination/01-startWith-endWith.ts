import { endWith, of, startWith } from "rxjs";

const numbers = of(1, 2, 3); // El of emite valores de manera sincrona

numbers
  // No importa el ordern donde pongas el endWith o el starWith
  // internamente rxjs sabe cual ejecutar primero
  .pipe(startWith("a", "b", "c"), endWith("x", "y", "z"))
  .subscribe(console.log);
