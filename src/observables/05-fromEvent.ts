import { fromEvent } from "rxjs";

/**
 * fromEvent: Emite valores de acuerdo a los eventos hechos en el DOM
 *
 */
const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

src1$.subscribe(observer);
src2$.subscribe((event) => {
  console.log(event.key);
});
