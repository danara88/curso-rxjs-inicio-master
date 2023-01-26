import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    // El ultimo argumento (inclusive), retorna la ultima emisión que completó el observable
    takeWhile(({ clientY }) => clientY <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
