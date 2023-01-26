import { interval, reduce, take } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);

console.log({ total });

interval(1000)
  .pipe(take(3), reduce(totalReducer)) // Puedo especificar el valor inicial
  .subscribe({
    next: (value) => console.log("next: ", value),
    complete: () => console.log("completed!"),
  });
