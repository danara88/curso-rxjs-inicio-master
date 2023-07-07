import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(3000), // mas eficiente poner el sample time arriba
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
