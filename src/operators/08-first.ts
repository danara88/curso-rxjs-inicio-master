import { first, fromEvent, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

/**
 * first(): Emite el primer valor del observable y lo completa. Es similar al take(1).
 * Cuando tenemos una condición, al cumplirse la condición del first, se emite el prime valor
 * y luego se completa la suscripción.
 */
click$
  .pipe(
    tap(() => console.log("tap")),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
