import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500); // Primer observable
const click$ = fromEvent(document, "click"); // Segundo observable

interval$.pipe(sample(click$)).subscribe(console.log);
