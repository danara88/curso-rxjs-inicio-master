import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
};

/**
 * Interval es asincrono.
 * Nunca se completa.
 */
const interval$ = interval(1000);
console.log("inicio");
// interval$.subscribe(observer);
console.log("fin");

/**
 * En 2 segundos se emite el valor y luego se completa.
 * Es asincrono.
 */
const timer$ = timer(2000, 1000);
// timer$.subscribe(observer);

/**
 * Con el timer puedo especificar cuando quiero que se ejecute mi observable
 * en base a un timer y completar el observable. (Ejemplo: Un calendario)
 */
const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const newTimer$ = timer(hoyEn5);
newTimer$.subscribe(observer);
