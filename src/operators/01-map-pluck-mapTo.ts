import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

range(1, 5)
  .pipe(map<number, string>((x) => (x * 10).toString()))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// map operator
const keyupCode$ = keyup$.pipe(map((event) => event.code));

// pluck operator
const keyupPlug$ = keyup$.pipe(pluck("target", "baseURI"));

// mapTo operator
const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));

keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log("map: ", code));
keyupPlug$.subscribe((url) => console.log("pluck: ", url));
keyupMapTo$.subscribe((text) => console.log("mapTo: ", text));
