import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(500).pipe(take(3));

// Es muy util cuando tengamos objetos que hacen mucho spam
// o que lanzan muchos eventos rapidamente.
// Tambien util cuando tenemos observables que emiten muchos valores que podemos ignorar.
click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
