import { fromEvent, merge } from "rxjs";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

// Si llegan a emitirse al mismo tiempo los valores, primero se mite el primeo
// keyup$ es el que tiene prioridad.
// Con el merge puedo tomar mas de 2 observables y combinarlos juntos.
// El producto o salid aqui es la emision de ambos observables
merge(keyup$, click$).subscribe(console.log);
