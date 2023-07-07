import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
} from "rxjs";

const click$ = fromEvent(document, "click");

/**
 * debounceTime es muy util cuando tengo un observable que emite una gran
 * cantidad de valores rapidamente y asi evitar perdida de performance en
 * mi aplicacion.
 */

// Ejemplo 1
// click$.pipe(debounceTime(3000)).subscribe(console.log);

// Ejemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

/**
 * Imaginar que cada vez que se presiona una tecla se llama
 * al servidor (afectando al performance) varias veces.
 */
const input$ = fromEvent<KeyboardEvent>(input, "keyup");
input$
  .pipe(pluck("target", "value"), debounceTime(1000), distinctUntilChanged())
  .subscribe(console.log);
