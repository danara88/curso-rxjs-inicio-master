import { concatMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(500).pipe(take(3));

// Puedo usar el concatMap cuando tengo que obtener loas emisiones de manera secuencial
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
