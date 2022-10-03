import { asyncScheduler, of, range } from "rxjs";

/**
 * Desde la posicion inicial, quiero 5 emisiones, los 5 valores consecutivos siguientes
 */
const src$ = range(1, 5, asyncScheduler);

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
