import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
  throttleTime,
} from "rxjs";

const click$ = fromEvent(document, "click");

// Ejemplo 1
// Tambien es muy util para controlar obs que emiten valores
// frecuentemente.
click$.pipe(throttleTime(3000)); //.subscribe(console.log);

// Ejemplo 2
/**
 * Este lo podemos utilizar por ejemplo cuando tenemos
 * una barra de busqueda por debajo del input
 */
const input = document.createElement("input");
document.querySelector("body").append(input);
const input$ = fromEvent<KeyboardEvent>(input, "keyup");
input$
  .pipe(
    pluck("target", "value"),
    throttleTime(500, asyncScheduler, {
      leading: true, // quiero el primer elemento
      trailing: true, // quiero el ultimo elemento
    }),
    distinctUntilChanged()
  )
  .subscribe(console.log);
