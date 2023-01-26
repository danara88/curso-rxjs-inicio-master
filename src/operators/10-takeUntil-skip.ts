import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent(boton, "click");

/**
 * skip: Omite X cantidad de emisiones del observable.
 */
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1), // No se continue nada despues de este skip hasta que sea la segunda emision
  tap(() => console.log("tap despues de skip"))
);

/**
 * takeUntil: Va emitir los valores del observable hasta que se emita el primer
 * valor del otro observable. Una vez emitido el primer valor del otro observable,
 * el observable se completa.
 */
counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});
